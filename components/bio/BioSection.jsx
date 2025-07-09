import BioText from "./BioText";
import BioAnimation from "./BioAnimation";

export default function BioSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-6">
        <BioText />
        <BioAnimation />
      </div>
    </section>
  );
}