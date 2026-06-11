import Hero from "@/components/Hero";
import ServicesBar from "@/components/ServicesBar";
import PortfolioCards from "@/components/PortfolioCards";
import WritingSection from "@/components/WritingSection";

export default function Home() {
  return (
    <main className="max-w-[900px] mx-auto px-16">
      <Hero />
      <ServicesBar />
      <PortfolioCards />
      <WritingSection />
    </main>
  );
}
