import Hero from "@/components/Hero";
import ServicesBar from "@/components/ServicesBar";
import AboutParagraph from "@/components/AboutParagraph";
import JournalFeed from "@/components/JournalFeed";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesBar />
      <AboutParagraph />
      <JournalFeed />
    </main>
  );
}
