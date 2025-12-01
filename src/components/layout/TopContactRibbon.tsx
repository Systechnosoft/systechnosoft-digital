import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';

// SVG icons for Pinterest and X (Twitter) since Lucide doesn't have Pinterest
const PinterestIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: '#', // TODO: Replace with actual Facebook URL
    ariaLabel: 'Visit our Facebook page',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#', // TODO: Replace with actual Instagram URL
    ariaLabel: 'Visit our Instagram profile',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#', // TODO: Replace with actual LinkedIn URL
    ariaLabel: 'Visit our LinkedIn company page',
  },
  {
    name: 'Pinterest',
    icon: PinterestIcon,
    href: '#', // TODO: Replace with actual Pinterest URL
    ariaLabel: 'Visit our Pinterest boards',
  },
  {
    name: 'X',
    icon: XIcon,
    href: '#', // TODO: Replace with actual X (Twitter) URL
    ariaLabel: 'Follow us on X',
  },
  {
    name: 'Message',
    icon: Send,
    href: '#', // TODO: Replace with contact or message URL
    ariaLabel: 'Send us a message',
  },
];

export function TopContactRibbon() {
  const { isVisible } = useScrollDirection();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="sticky top-0 z-40 bg-neutral-50 border-b border-neutral-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              {/* Social Icons - Left */}
              <div className="flex items-center gap-1">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  // Hide some icons on smaller screens
                  const isHiddenOnMobile = idx > 2; // Show first 3 on mobile
                  const isHiddenOnTablet = idx > 3; // Show first 4 on tablet
                  
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.ariaLabel}
                      className={`
                        inline-flex items-center justify-center w-8 h-8 rounded-full
                        text-neutral-700 hover:text-[#E52629] hover:bg-neutral-100
                        transition-colors duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2
                        ${isHiddenOnMobile ? 'hidden md:inline-flex' : ''}
                        ${isHiddenOnTablet ? 'lg:inline-flex' : ''}
                      `}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>

              {/* Contact Info - Right */}
              <div className="flex items-center gap-4 md:gap-6">
                {/* Vertical Divider */}
                <div className="hidden sm:block h-6 w-px bg-neutral-200" aria-hidden="true" />
                
                {/* Phone */}
                <a
                  href="tel:+13473051255"
                  className="flex items-center gap-2 text-sm text-neutral-800 hover:text-[#E52629] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 rounded"
                  aria-label="Call us at +1 (347) 305-1255"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline font-inter">+1 (347) 305-1255</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@systechnosoft.in"
                  className="flex items-center gap-2 text-sm text-neutral-800 hover:text-[#E52629] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 rounded"
                  aria-label="Email us at info@systechnosoft.in"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="hidden lg:inline font-inter">info@systechnosoft.in</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
