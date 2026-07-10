import Hero from "@/components/Hero";
import ServicesBar from "@/components/ServicesBar";
import BoardingPassTeaser from "@/components/BoardingPassTeaser";
import AboutParagraph from "@/components/AboutParagraph";
import JournalFeed from "@/components/JournalFeed";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesBar />
      <BoardingPassTeaser />
      <AboutParagraph />
      <JournalFeed />
    </main>
  );
}
