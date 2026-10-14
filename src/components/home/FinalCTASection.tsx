import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section id="cta" className="section section-cta-glow px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center document-card p-8 md:p-12">
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.5} />

          <h2 className="mb-4">Ready to Transform Your Board?</h2>

          <p className="text-lg text-muted-foreground mb-8">
            Join forward-thinking nonprofits using agentic AI to save time and
            boost engagement.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-5">
            <Button size="lg" className="font-bold" asChild>
              <a href="https://boarddemo.nonprofitai.software/" target="_blank" rel="noopener noreferrer">
                Try the Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Or get{" "}
            <a
              href="mailto:install@nonprofitai.software?subject=Done-For-You Setup Request"
              className="text-primary hover:underline font-bold"
            >
              Done-For-You setup for $299
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
