import { Link } from "react-router-dom";
import logo from "@/assets/nonprofit-ai-logo.png";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";

const footerLinks = {
  boardGovernance: [
    { label: "Overview", href: "/board-governance" },
    { label: "Features", href: "/board-governance/features" },
    { label: "Free Checklist", href: "/board-governance/checklist" },
    { label: "Demo", href: "https://demo.nonprofitai.software/login" },
  ],
  controlTower: [
    { label: "Overview", href: "/control-tower" },
    { label: "Pricing", href: "/control-tower/pricing" },
    { label: "Trust & Security", href: "/trust" },
    { label: "Demo", href: "https://demo.nonprofitai.software/" },
    { label: "Schedule a Call", href: "https://collabai.software/contact" },
  ],
  company: [
    { label: "About Us", href: "https://collabai.software/" },
    { label: "Contact", href: "https://collabai.software/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Unsubscribe", href: "/unsubscribe" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <img src={logo} alt="NonProfitAI" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered board governance for nonprofits.
            </p>
            <NewsletterSignup variant="compact" source="site_footer" />
          </div>

          {/* Board Governance Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Board Governance</h4>
            <ul className="space-y-2">
              {footerLinks.boardGovernance.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
                  ) : (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Control Tower Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Control Tower</h4>
            <ul className="space-y-2">
              {footerLinks.controlTower.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
                  ) : (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} NonProfitAI. AI-powered software for nonprofits.
          </p>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Powered by{" "}
            <a 
              href="https://collabai.software/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-bold"
            >
              CollabAI Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
