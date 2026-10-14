import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSlides, type HowItWorksSlide } from "@/components/home/HowItWorksSlides";
import { FolderTree, Home, MessageSquareText, Gift } from "lucide-react";
import { ProblemSection } from "@/components/home/ProblemSection";
import { AgentsSection } from "@/components/home/AgentsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { DownloadSection } from "@/components/home/DownloadSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const howItWorksSlides: HowItWorksSlide[] = [
  {
    icon: FolderTree,
    headline: "Right now, it's scattered.",
    body: "Agendas in email. Minutes in someone's Google Doc. Committee notes in a text thread nobody can find later.",
  },
  {
    icon: Home,
    headline: "One place for everything.",
    body: "Meetings, materials, votes, and committee work — in one system every board member can find.",
  },
  {
    icon: MessageSquareText,
    headline: "AI does the note-taking.",
    body: "Meeting summaries and action items get generated automatically.",
  },
  {
    icon: Gift,
    headline: "Free. Open source. Yours.",
    body: "No license fee, no vendor lock-in. Self-host in minutes on your own Lovable account.",
  },
];

const BoardGovernance = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <HowItWorksSlides title="How It Works" slides={howItWorksSlides} />
      <ProblemSection />
      <AgentsSection />
      <FeaturesSection />
      <ComparisonSection />
      <DownloadSection />
      <HowItWorksSection />
      <UseCasesSection />
      <FinalCTASection />
    </SiteLayout>
  );
};

export default BoardGovernance;
