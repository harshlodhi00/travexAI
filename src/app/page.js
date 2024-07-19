import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroPage/HeroSection";
import Roi from "@/components/HeroPage/Roi";
import YoutubeEmbed from "@/components/HeroPage/YoutubeEmbed";

export default function Home() {
  return (
    <div className="w-[100vw]">
      <HeroSection />
      <YoutubeEmbed />
      <Roi />
    </div>
  );
}
