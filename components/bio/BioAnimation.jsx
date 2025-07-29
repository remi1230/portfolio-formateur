import Image from "next/image";

export default function BioAnimation() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="relative w-full md:w-5/12 h-64 md:h-auto min-h-[400px] hidden md:block">
      <Image
        src={`${basePath}/assets/animations/formateur.gif`}
        alt="Avatar animé"
        fill
        sizes="(min-width: 512px) 40vw, 100vw"
        className="object-contain"
        unoptimized
      />
    </div>
  );
}