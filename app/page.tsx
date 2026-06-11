import Hero from "@/components/Hero";
import ServicesBar from "@/components/ServicesBar";

export default function Home() {
  return (
    <main className="px-12">
      <div className="max-w-[1300px] mx-auto">
        <Hero />
        <ServicesBar />
      </div>
    </main>
  );
}
