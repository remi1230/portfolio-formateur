import Image from "next/image";

export default function BioAnimation() {
  return (
    <div className="w-full md:w-5/12 flex justify-center md:justify-end">
      <Image
        src="/assets/animations/developpeur.gif" // ou .png/.webp
        alt="Avatar animé"
        fill
        className="w-3/4 md:w-full h-auto"
        priority
      />
    </div>
  );
}
