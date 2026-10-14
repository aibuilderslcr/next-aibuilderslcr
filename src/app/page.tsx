import { CrtOverlay } from "@/components/CrtOverlay";
import { PosterHero } from "@/components/PosterHero";

export default function Home() {
  return (
    <div className="poster-stage min-h-screen bg-ground">
      <CrtOverlay />
      <main>
        <PosterHero />
      </main>
    </div>
  );
}
