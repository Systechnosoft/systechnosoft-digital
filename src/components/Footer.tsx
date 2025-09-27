import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import systechnosoftLogo from "@/assets/systechnosoft-logo.png";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "IT Infrastructure", href: "/services/infrastructure" },
      { name: "Appian (Low-code)", href: "/services/appian" },
      { name: "Salesforce (Low-code)", href: "/services/salesforce" },
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
      { name: "Insights", href: "/insights" },
      { name: "Digital Readiness Check", href: "/readiness-check" },
      { name: "ROI Estimator", href: "/roi-estimator" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/about#careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4 focus-enterprise rounded w-fit">
              <img 
                src={systechnosoftLogo} 
                alt="Systechnosoft Technologies" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Maximize Innovation. Minimize Code. Enterprise IT solutions across Infrastructure, 
              Low-code, and AI/Automation — delivered fast, securely, and at scale.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>E-8, Railway Colony, Jagatpura, Jaipur, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@systechnosoft.com" className="hover:text-foreground transition-colors">
                  contact@systechnosoft.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-foreground transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>
          </div>

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
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Systechnosoft Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
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