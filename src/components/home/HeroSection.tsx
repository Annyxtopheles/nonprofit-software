import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, LayoutDashboard, Users, Bot, Sparkles, Layers, Cpu } from "lucide-react";

// Import screenshots
import dashboardImg from "@/assets/screenshots/board-dashboard.png";
import meetingsImg from "@/assets/screenshots/meetings-view.png";
import aiAgentsImg from "@/assets/screenshots/reports-analytics.png";

const trustBadges = [
  { icon: Clock, label: "2-minute setup" },
];

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, image: dashboardImg },
  { id: "meetings", label: "Meetings", icon: Users, image: meetingsImg },
  { id: "reporting", label: "Reporting", icon: Bot, image: aiAgentsImg },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const activeImage = tabs.find(tab => tab.id === activeTab)?.image || dashboardImg;

  return (
    <section id="hero" className="section section-mesh px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Eyebrow */}
            <Badge className="mb-5 bg-secondary text-primary border-0 hover:bg-secondary/80">
              <Sparkles className="w-3 h-3 mr-1" />
              Built for Nonprofit Boards
            </Badge>

            {/* Headline */}
            <h1 className="mb-5">
              <span className="block">AI-Powered Board</span>
              <span className="text-primary">Governance for Nonprofits</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform your board meetings with autonomous AI agents that summarize 
              documents, answer questions, send reminders, and detect trends.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="font-bold" asChild>
                <a href="https://boarddemo.nonprofitai.software/" target="_blank" rel="noopener noreferrer">
                  Try the Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-bold" asChild>
                <a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="trust-badge">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tabbed Screenshot Preview */}
          <div className="hidden lg:block">
            {/* Tab Buttons */}
            <div className="inline-flex gap-1 p-1.5 mb-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <tab.icon className={`w-4 h-4 transition-transform duration-300 ${activeTab === tab.id ? "scale-110" : ""}`} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Screenshot Display */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="relative rounded-xl overflow-hidden document-card p-0">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--warning))]" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-background rounded-md flex items-center px-3">
                      <span className="text-xs text-muted-foreground font-medium truncate">nonprofitai.software/dashboard</span>
                    </div>
                  </div>
                </div>
                
                {/* Screenshot content */}
                <div
                  className="relative bg-muted/40 flex items-center justify-center p-3 md:p-4"
                  style={{ minHeight: 280 }}
                >
                  {tabs.map((tab) => (
                    <img
                      key={tab.id}
                      src={tab.image}
                      alt={`${tab.label} preview`}
                      className={`w-full h-auto max-h-[340px] object-contain object-top rounded-md transition-all duration-500 ease-in-out ${
                        activeTab === tab.id
                          ? "opacity-100 relative"
                          : "opacity-0 absolute inset-3 md:inset-4"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats - Updated with executive-focused metrics */}
            <div className="mt-6 flex justify-center gap-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl document-card">
                <div className="icon-container w-10 h-10">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">21</div>
                  <div className="text-xs text-muted-foreground font-medium">Platform Features</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl document-card">
                <div className="icon-container w-10 h-10">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10</div>
                  <div className="text-xs text-muted-foreground font-medium">AI Agents 24/7</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl document-card">
                <div className="icon-container w-10 h-10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground font-medium">AI Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
