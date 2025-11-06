import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import nodemailer from 'nodemailer'

const app = express()
app.use(helmet())
app.use(express.json({ limit: '100kb' }))

// CORS — allow only your front-end domains
const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean)
app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true) // allow curl/postman for testing
    return allowed.includes(origin) ? cb(null, true) : cb(new Error('Not allowed by CORS'))
  },
  methods: ['POST', 'OPTIONS'],
  credentials: false
}))

// Health check
app.get('/health', (req, res) => res.send('ok'))

// Mail transport (Gmail SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: String(process.env.SMTP_SECURE) === 'true',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, role, message, path } = req.body || {}
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'invalid_input' })
    }

    // Derive domain & URL from headers
    const xfProto = req.headers['x-forwarded-proto'] || 'https'
    const xfHost = req.headers['x-forwarded-host'] || req.headers.host
    const domain = String(xfHost || '').toString()
    const url = `${xfProto}://${domain}${path || ''}`

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;max-width:600px;">
        <h2 style="font-family:Montserrat,Arial;color:#1a1a1a;border-bottom:2px solid #3b82f6;padding-bottom:10px;">New Contact Request</h2>
        <table style="border-collapse:collapse;width:100%;margin-top:20px;">
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:12px 8px;font-weight:600;width:140px;color:#6b7280;">Name</td>
            <td style="padding:12px 8px;color:#1a1a1a;">${escapeHtml(name)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:12px 8px;font-weight:600;color:#6b7280;">Email</td>
            <td style="padding:12px 8px;color:#1a1a1a;"><a href="mailto:${escapeHtml(email)}" style="color:#3b82f6;">${escapeHtml(email)}</a></td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:12px 8px;font-weight:600;color:#6b7280;">Company</td>
            <td style="padding:12px 8px;color:#1a1a1a;">${escapeHtml(company || '-')}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:12px 8px;font-weight:600;color:#6b7280;">Role</td>
            <td style="padding:12px 8px;color:#1a1a1a;">${escapeHtml(role || '-')}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:12px 8px;font-weight:600;color:#6b7280;vertical-align:top;">Message</td>
            <td style="padding:12px 8px;color:#1a1a1a;">${escapeHtml((message || '')).replace(/\n/g, '<br/>')}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:12px 8px;font-weight:600;color:#6b7280;">Domain</td>
            <td style="padding:12px 8px;color:#1a1a1a;">${escapeHtml(domain)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:12px 8px;font-weight:600;color:#6b7280;">Page URL</td>
            <td style="padding:12px 8px;color:#1a1a1a;"><a href="${escapeHtml(url)}" style="color:#3b82f6;">${escapeHtml(url)}</a></td>
          </tr>
          <tr>
            <td style="padding:12px 8px;font-weight:600;color:#6b7280;">Timestamp</td>
            <td style="padding:12px 8px;color:#1a1a1a;">${new Date().toISOString()}</td>
          </tr>
        </table>
        <p style="margin-top:20px;color:#6b7280;font-size:14px;">This message was sent via the Systechnosoft contact form.</p>
      </div>`

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New contact — ${name}${company ? ' (' + company + ')' : ''}`,
      html,
      text: `New Contact Request\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nRole: ${role || '-'}\n\nMessage:\n${message}\n\nDomain: ${domain}\nPage URL: ${url}\nTimestamp: ${new Date().toISOString()}`
    })

    console.log(`✓ Contact email sent from ${email} at ${new Date().toISOString()}`)
    return res.json({ ok: true })
  } catch (err) {
    console.error('contact_email_error', err)
    return res.status(503).json({ ok: false, error: 'service_unavailable' })
  }
})

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const port = Number(process.env.PORT || 3000)
app.listen(port, () => {
  console.log(`🚀 Systechnosoft contact email server listening on port ${port}`)
  console.log(`📧 Sending from: ${process.env.EMAIL_FROM}`)
  console.log(`📬 Sending to: ${process.env.EMAIL_TO}`)
})
