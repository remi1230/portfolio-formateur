import BioText from "./BioText";
import BioAnimation from "./BioAnimation";

export default function BioSection() {
  return (
    <section id="bio" className="scroll-mt-10 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <BioText />
        <BioAnimation/>
      </div>
    </section>
  );
}