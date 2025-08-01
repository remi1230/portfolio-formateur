import Image from 'next/image';
import QuotedBlock from '../ui-kit/QuotedBlock';

export default function ContactTestimony() {
  return (
    <div className="space-y-4 prose">
      <h3 className="text-sm font-bold tracking-wide uppercase">ENEDIS</h3>
      <QuotedBlock className="">
         Merci à Rémi pour son intervention sur l’IA et le développement web.
        Plusieurs apprenants ont exprimé que ce moment avait été décisif dans leur choix de s’orienter vers le développements.
        Une formation à fort impact, autant sur le fond que sur la motivation.
      </QuotedBlock>

      <div className="flex items-center gap-4 mt-4">
        <Image
          src="/assets/images/avatar-gilles-guenette.png"
          alt="Bruno G."
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Gilles G.</p>
          <p className="text-sm text-brand-fo">Directeur Territorial Groupe OSENGO</p>
        </div>
      </div>
    </div>
  );
}
