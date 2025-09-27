import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import systechnosoftLogo from "@/assets/systechnosoft-logo.png";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "IT Infrastructure", href: "/services/infrastructure" },
      { name: "Low-code", href: "/services/low-code" },
      { name: "AI & Automation", href: "/services/ai-automation" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "BFSI", href: "/industries#bfsi" },
      { name: "Oil & Gas", href: "/industries#oil-gas" },
      { name: "Aviation", href: "/industries#aviation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "IT Network Health Check", href: "/readiness-check" },
      { name: "Get a Quotation", href: "/get-quotation" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6 mb-2 lg:mb-3">
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-montserrat font-medium text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-enterprise rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-medium text-foreground mb-4">
              Systechnosoft Technologies
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>E-8, Railway Colony, Jagatpura, Jaipur, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@systechnosoft.in" className="hover:text-foreground transition-colors">
                  info@systechnosoft.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-foreground transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Links */}
        <div className="text-center my-2">
          <div className="flex items-center justify-center text-sm leading-snug text-muted-foreground">
            <Link 
              to="/about" 
              className="hover:text-foreground hover:underline transition-colors focus-enterprise rounded"
            >
              About Us
            </Link>
            <span className="mx-2" aria-hidden="true">•</span>
            <Link 
              to="/contact" 
              className="hover:text-foreground hover:underline transition-colors focus-enterprise rounded"
            >
              Contact
            </Link>
            <span className="mx-2" aria-hidden="true">•</span>
            <Link 
              to="/careers" 
              className="hover:text-foreground hover:underline transition-colors focus-enterprise rounded"
            >
              Careers
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-200 pt-2 lg:pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 py-2 lg:py-3">
            <div className="text-sm leading-snug text-muted-foreground">
              © {new Date().getFullYear()} Systechnosoft Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm leading-snug">
              <Link 
                to="/privacy-policy" 
                className="text-muted-foreground hover:text-foreground transition-colors focus-enterprise rounded"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-muted-foreground hover:text-foreground transition-colors focus-enterprise rounded"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookie-policy" 
                className="text-muted-foreground hover:text-foreground transition-colors focus-enterprise rounded"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}