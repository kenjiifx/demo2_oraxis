import Hero from "@/components/velocity/sections/Hero";
import ConnectedScrollSections from "@/components/velocity/sections/ConnectedScrollSections";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <ConnectedScrollSections />
    </main>
  );
}
