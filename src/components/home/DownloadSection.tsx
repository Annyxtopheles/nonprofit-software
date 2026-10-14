import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Check, Download } from "lucide-react";

const downloadOptions = [
  {
    icon: Zap,
    title: "1-Click Remix on Lovable",
    badge: "Easiest",
    description: "No coding required. Your own instance in 2 minutes.",
    features: [
      "Copy our Lovable URL and remix instantly",
      "Backend automatically configured",
      "Zero technical knowledge needed",
      "Start using immediately",
    ],
    cta: {
      label: "Remix Now",
      href: "https://lovable.dev/projects/abe98d63-97eb-4d63-9e5d-6107d45c83d9",
    },
    highlighted: true,
  },
];

export function DownloadSection() {
  return (
    <section id="download" className="section px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-secondary text-primary border-0">
            <Download className="w-3 h-3 mr-1" />
            Get Started Today
          </Badge>
          <h2 className="mb-4">Get NonProfitAI</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deploy your own instance in minutes — no infrastructure or coding required.
          </p>
        </div>

        <div className="grid gap-6 max-w-2xl mx-auto mb-10">
          {downloadOptions.map((option) => (
            <div
              key={option.title}
              className={`document-card flex flex-col text-center relative ${
                option.highlighted ? "ring-2 ring-primary/25" : ""
              }`}
            >
              <div className="flex flex-col items-center mb-4">
                <option.icon className="w-7 h-7 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="text-[15px] font-medium mb-1">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                <Badge variant={option.highlighted ? "default" : "secondary"} className="shrink-0">
                  {option.badge}
                </Badge>
              </div>

              <ul className="space-y-3 mb-6 flex-1 inline-block text-left mx-auto">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={option.highlighted ? "default" : "outline"}
                className="w-full font-bold"
                asChild
              >
                <a
                  href={option.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.cta.label}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 document-card max-w-2xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">Need help setting up?</span>{" "}
            Get{" "}
            <a
              href="mailto:install@nonprofitai.software?subject=Done-For-You Setup Request"
              className="text-primary hover:underline font-medium"
            >
              Done-For-You setup for $299
            </a>{" "}
            — we handle everything.
          </p>
        </div>
      </div>
    </section>
  );
}
