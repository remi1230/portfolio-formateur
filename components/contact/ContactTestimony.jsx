import Image from 'next/image';

export default function ContactTestimony() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold tracking-wide uppercase">ENEDIS</h3>
      <blockquote className="italic">
        <span className="text-4xl leading-none">“</span>
        Merci à Rémi pour son implication et son travail de qualité dans le développement de notre portail web. Son intervention a permis 
        l’installation fluide de notre nouveau service.
      </blockquote>

      <div className="flex items-center gap-4 mt-4">
        <Image
          src="/assets/images/avatar-bruno.png"
          alt="Pierre S."
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Bruno G.</p>
          <p className="text-sm text-brand-fo">Chef de projet - ENEDIS</p>
        </div>
      </div>
    </div>
  );
}
