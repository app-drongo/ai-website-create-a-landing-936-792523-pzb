import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  CreditCard,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant transaction processing and account data synchronization across all connected banking partners.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "PCI DSS Level 1 compliance with 256-bit encryption and multi-layer fraud protection.",
      badge: "Security"
    },
    {
      icon: CreditCard,
      title: "Payment Initiation",
      description: "Secure payment processing with instant settlement and comprehensive transaction tracking.",
      badge: "Payments"
    },
    {
      icon: Globe,
      title: "Global Banking Network",
      description: "Connect to 500+ financial institutions across North America and Europe.",
      badge: "Coverage"
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Advanced transaction categorization and spending insights powered by machine learning.",
      badge: "Analytics"
    },
    {
      icon: Lock,
      title: "Open Banking Compliant",
      description: "Fully compliant with PSD2, CRA, and other regulatory frameworks worldwide.",
      badge: "Compliance"
    },
    {
      icon: Code2,
      title: "Developer-First APIs",
      description: "RESTful APIs with comprehensive SDKs, webhooks, and detailed documentation.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Enterprise Support",
      description: "Dedicated technical account managers and 24/7 priority support for mission-critical applications.",
      badge: "Support"
    },
    {
      icon: Smartphone,
      title: "Mobile SDK",
      description: "Native iOS and Android SDKs for seamless mobile banking integration.",
      badge: "Mobile"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            API Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Fintech Needs to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Scale Banking Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive banking APIs designed for financial institutions, fintech startups, 
            and enterprise applications requiring secure, compliant financial data access.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to integrate with leading banking APIs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Request API Access
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}