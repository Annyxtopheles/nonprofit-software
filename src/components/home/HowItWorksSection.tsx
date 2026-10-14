import { useState } from "react";
import { Copy, MousePointerClick, Settings, GitBranch, Server, Users, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const remixSteps = [
  {
    number: "01",
    icon: Copy,
    title: "Copy the Lovable Project URL",
    description:
      "Click the 'Remix on Lovable' button above to open the project. Copy the URL or click the remix button directly.",
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Click 'Remix' to Create Your Own Copy",
    description:
      "Lovable will create your own instance with the backend automatically configured. No coding required.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Configure Branding & Invite Your Board",
    description:
      "Upload your logo, customize colors, add board member profiles, and you're ready to go!",
  },
];

const selfHostSteps = [
  {
    number: "01",
    icon: GitBranch,
    title: "Clone the Repository from GitHub",
    description:
      "Use git clone to copy the repository to your local machine or server. Full source code access included.",
  },
  {
    number: "02",
    icon: Server,
    title: "Deploy to Supabase & Configure API Keys",
    description:
      "Set up your Supabase project, configure environment variables, and deploy to your preferred hosting provider.",
  },
  {
    number: "03",
    icon: Users,
    title: "Configure Branding & Invite Your Board",
    description:
      "Customize your instance with your organization's branding, add board members, and start your first AI-powered meeting.",
  },
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState("remix");

  const steps = activeTab === "remix" ? remixSteps : selfHostSteps;

  return (
    <section id="how-it-works" className="section px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-secondary text-primary border-0">
            <Play className="w-3 h-3 mr-1" />
            Getting Started
          </Badge>
          <h2 className="mb-4">Get Started in 3 Easy Steps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your deployment path — both are <span className="text-foreground font-bold">completely free.</span>
          </p>
        </div>

        {/* Demo Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Video container */}
            <div className="relative document-card p-0 overflow-hidden">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--warning))]" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-background rounded-md flex items-center px-3">
                    <span className="text-xs text-muted-foreground font-medium">Watch Demo Video</span>
                  </div>
                </div>
              </div>
              
              {/* YouTube Embed */}
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/QmHfdtx5BD8"
                  title="NonProfitAI Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
              <TabsTrigger value="remix" className="font-bold">Lovable Remix</TabsTrigger>
              <TabsTrigger value="selfhost" className="font-bold">GitHub Self-Host</TabsTrigger>
            </TabsList>

            <TabsContent value="remix" className="mt-6">
              <p className="text-sm text-muted-foreground text-center mb-6">
                <span className="font-bold text-foreground">Best for:</span> Non-technical users who want the fastest setup with zero coding.
              </p>
            </TabsContent>

            <TabsContent value="selfhost" className="mt-6">
              <p className="text-sm text-muted-foreground text-center mb-6">
                <span className="font-bold text-foreground">Best for:</span> Technical teams who want full control and their own hosting infrastructure.
              </p>
            </TabsContent>
          </Tabs>

          {/* Steps with timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="space-y-5">
              {steps.map((step, index) => (
                <div key={step.number} className="document-card relative">
                  <div className="flex items-start gap-5">
                    {/* Step Number */}
                    <div className="relative z-10 hidden sm:block">
                      <div className="number-badge text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 sm:hidden">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed sm:pl-[52px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
