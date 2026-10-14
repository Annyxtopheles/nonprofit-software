import { Link } from "react-router-dom";
import { Shield, Layers, ArrowRight } from "lucide-react";
import logo from "@/assets/nonprofit-ai-logo.png";

const decks = [
  {
    title: "Board Governance",
    subtitle: "AI-Powered Board Management for Nonprofits",
    icon: Shield,
    path: "/sales-deck/board-governance",
    color: "hsl(113, 100%, 33%)",
    slides: "10 slides",
  },
  {
    title: "Nonprofit Control Tower",
    subtitle: "The Operational Intelligence Layer for Modern Nonprofits",
    icon: Layers,
    path: "/sales-deck/control-tower",
    color: "hsl(113, 100%, 27%)",
    slides: "10 slides",
  },
];

export default function SalesDeckIndex() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white rounded-xl p-2 mb-8">
        <img src={logo} alt="NonProfitAI" className="h-10 w-auto" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">Sales Decks</h1>
      <p className="text-white/50 mb-10 text-center max-w-md">
        Internal sales presentations for the NonProfitAI product portfolio.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl w-full">
        {decks.map((deck) => (
          <Link
            key={deck.path}
            to={deck.path}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all group"
          >
            <deck.icon className="w-10 h-10 mb-4" style={{ color: deck.color }} />
            <h2 className="text-xl font-bold mb-1">{deck.title}</h2>
            <p className="text-sm text-white/50 mb-4">{deck.subtitle}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/30">{deck.slides}</span>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
      <p className="text-xs text-white/20 mt-12">Powered by CollabAI Software · Internal Use Only</p>
    </div>
  );
}
