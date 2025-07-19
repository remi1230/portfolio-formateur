import Image from "next/image";

export default function BioAnimation() {
  return (
    <div className="relative w-full md:w-5/12 h-64 md:h-auto min-h-[400px] hidden md:block">
      <Image
        src="/assets/animations/developpeur.gif"
        alt="Avatar animé"
        fill
        sizes="(min-width: 512px) 40vw, 100vw"
        className="object-contain"
        unoptimized
      />
    </div>
  );
}
