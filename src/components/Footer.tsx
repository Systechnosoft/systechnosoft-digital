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
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-y-4 mb-3 lg:mb-3 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-x-[clamp(24px,4vw,48px)]">
          {/* Services - Left */}
          <div className="max-w-72 lg:justify-self-start lg:text-left">
            <h3 className="font-montserrat font-medium text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerSections[0].links.map((link) => (
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

          {/* Industries - Center */}
          <div className="max-w-72 lg:justify-self-center lg:text-center">
            <h3 className="font-montserrat font-medium text-foreground mb-4">
              Industries
            </h3>
            <ul className="space-y-2">
              {footerSections[1].links.map((link) => (
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

          {/* Contact Info - Right */}
          <div className="max-w-72 lg:justify-self-end lg:text-left">
            <h3 className="font-montserrat font-medium text-foreground mb-4">
              Systechnosoft Technologies
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  49 5th Ave #1187, Brooklyn,<br />
                  NY 11217, United States
                </address>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@systechnosoft.in" className="hover:text-foreground transition-colors">
                  info@systechnosoft.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+13473051255" className="hover:text-foreground transition-colors">
                  +1 (347) 305-1255
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