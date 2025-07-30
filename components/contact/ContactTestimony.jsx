import Image from 'next/image';

export default function ContactTestimony() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ? (process.env.NEXT_PUBLIC_BASE_PATH + '/') : '/';

  return (
    <div className="space-y-4 prose">
      <h3 className="text-sm font-bold tracking-wide uppercase">ENEDIS</h3>
      <blockquote className="italic">
        <span className="text-4xl">“</span>
        Merci à Rémi pour son intervention sur l’IA et le développement web.
        Plusieurs apprenants ont exprimé que ce moment avait été décisif dans leur choix de s’orienter vers le développements.
        Une formation à fort impact, autant sur le fond que sur la motivation.
      </blockquote>

      <div className="flex items-center gap-4 mt-4">
        <Image
          src={`${basePath}assets/images/avatar-gilles-guenette.png`}
          alt="Pierre S."
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Gilles G.</p>
          <p className="text-sm text-brand-fo">Le directeur - Osengo Berry</p>
        </div>
      </div>
    </div>
  );
}
