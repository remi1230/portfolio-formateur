import HeroSection from '../components/hero/HeroSection';
import BioSection from '../components/bio/BioSection';

export default function Home() {
  return (
    <div className="">
      <div className="p-10">
        <HeroSection />
        <BioSection />
      </div>
    </div>
  );
}