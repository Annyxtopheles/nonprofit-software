import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

const About = () => (
  <SiteLayout>
    <section className="section py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-3">About Us</p>
          <h1 className="mb-6">Making AI Accessible for Nonprofits</h1>
          <p className="text-xl text-muted-foreground mb-12">We believe every nonprofit deserves access to powerful governance tools, regardless of budget.</p>
        </div>

        <div className="prose prose-lg max-w-3xl mx-auto mb-12">
          <p className="text-muted-foreground leading-relaxed mb-6">NonProfitAI was born from a simple observation: nonprofit boards are spending too much time on administrative tasks and not enough time on mission-critical decisions.</p>
          <p className="text-muted-foreground leading-relaxed">We built an AI-powered platform that handles the busy work—summarizing documents, answering questions, sending reminders, and detecting trends—so board members can focus on what matters most.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mb-12 max-w-3xl mx-auto">
          <div className="document-card text-center">
            <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Mission-Driven</h3>
            <p className="text-sm text-muted-foreground">Built for nonprofits, by nonprofit leaders</p>
          </div>
          <div className="document-card text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Community First</h3>
            <p className="text-sm text-muted-foreground">Growing community of nonprofit leaders</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild><a href="https://demo.nonprofitai.software/login" target="_blank" rel="noopener noreferrer">Try the Demo</a></Button>
          <Button size="lg" variant="outline" asChild><a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">Contact Us</a></Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default About;