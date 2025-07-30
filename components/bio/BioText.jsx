export default function BioText() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ? (process.env.NEXT_PUBLIC_BASE_PATH + '/') : '/';

  return (
    <div className="w-full md:w-7/12 text-center md:text-left space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Formateur en développement web <span className="text-brand-important">passionné</span>
      </h1>

      <div className="prose prose-sm xl:prose-lg">
        <p>
          <strong>J’accompagne les futurs développeurs</strong> dans leur montée en compétences sur des technologies modernes comme HTML, CSS, JavaScript, React, Node.js, Symfony ou encore Git.
        </p>
        <p>
          Des organismes tels que <strong>Pôle Emploi, des centres de formation certifiés Qualiopi ou des bootcamps privés</strong> m’ont fait confiance pour encadrer des formations intensives et professionnalisantes.
        </p>
        <p>
          Fort de <strong>7 années d’expérience en développement web</strong>, je mets un point d’honneur à transmettre des savoirs concrets, alignés avec les réalités du métier.
        </p>
        <p className="italic text-brand-fo text-base">
          Ma force : pédagogie active, expertise terrain, bienveillance, et adaptation aux profils et aux rythmes de chacun.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
        <a href="#contact" className="btn btn-primary">Me contacter</a>
        <a href={`${basePath}assets/documents/CV-Développeur-Rémi-Tafforeau.pdf`} target="_blank" className="btn btn-outline btn-secondary">
          Mon CV de développeur
        </a>
      </div>
    </div>
  );
}