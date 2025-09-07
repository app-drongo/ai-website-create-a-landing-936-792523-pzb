import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  TrendingUp,
  Shield,
  Zap,
  Users
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "#features" },
        { name: "API Documentation", href: "/api-docs" },
        { name: "Integration Guide", href: "/integrations" },
        { name: "Developer Tools", href: "/developers" },
        { name: "Sandbox", href: "/sandbox" },
        { name: "Status", href: "/status" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Account Aggregation", href: "/solutions/aggregation" },
        { name: "Payment Initiation", href: "/solutions/payments" },
        { name: "Identity Verification", href: "/solutions/identity" },
        { name: "Risk Assessment", href: "/solutions/risk" },
        { name: "Compliance Tools", href: "/solutions/compliance" },
        { name: "Analytics", href: "/solutions/analytics" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api-reference" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Webinars", href: "/webinars" },
        { name: "Blog", href: "/blog" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Security", href: "/security" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Compliance", href: "/compliance" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/openflow" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/openflow" },
    { name: "GitHub", icon: Github, href: "https://github.com/openflow" }
  ]

  return (
    <footer className="bg-background border-t border-muted">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <TrendingUp className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-foreground">OpenFlow</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering financial innovation through secure, compliant open banking APIs. 
                Connect, analyze, and build the future of financial services with confidence.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="size-4 text-primary" />
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Zap className="size-4 text-accent" />
                <span>99.9% Uptime</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@openflow.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-FLOW</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Financial District, New York</span>
              </div>
            </div>

            {/* Developer Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Developer Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-muted rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get API updates, new features, and developer resources. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 OpenFlow. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-accent fill-current" /> for developers
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-muted/30">
            <Link href="/security" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="/regulatory" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Regulatory
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}