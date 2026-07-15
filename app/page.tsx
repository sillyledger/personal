import Hero from "@/components/Hero";
import ServicesBar from "@/components/ServicesBar";
import BoardingPassTeaser from "@/components/BoardingPassTeaser";
import AboutParagraph from "@/components/AboutParagraph";
import PhotoStrip from "@/components/PhotoStrip";
import JournalFeed from "@/components/JournalFeed";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesBar />
      <BoardingPassTeaser />
      <JournalFeed />
      <PhotoStrip />
      <AboutParagraph />
    </main>
  );
}
