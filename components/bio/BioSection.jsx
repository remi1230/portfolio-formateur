import BioText from "./BioText";
import BioAnimation from "./BioAnimation";

export default function BioSection() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <BioText />
        <BioAnimation />
      </div>
    </section>
  );
}