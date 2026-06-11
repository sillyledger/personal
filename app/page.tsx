import Hero from "@/components/Hero";
import ServicesBar from "@/components/ServicesBar";

export default function Home() {
  return (
    <main className="max-w-[1100px] mx-auto px-16">
      <Hero />
      <ServicesBar />
    </main>
  );
}
