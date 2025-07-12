import HeroSection from '../components/hero/HeroSection';
import BioSection from '../components/bio/BioSection';
import CompanySection from '../components/company/CompanySection';
import StackSection from '../components/stack/StackSection';

export default function Home() {
  return (
    <div className="">
      <div className="p-10">
        <HeroSection />
        <div className="max-w-screen-xl mx-auto flex flex-col gap-24 lg:gap-64 py-16 mt-24 md:py-24">
          <BioSection />
          <CompanySection />
          <StackSection />
        </div>
      </div>
    </div>
  );
}