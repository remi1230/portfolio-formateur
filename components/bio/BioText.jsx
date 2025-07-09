export default function BioText() {
  return (
    <div className="w-full md:w-7/12 text-center md:text-left space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        Développeur web full stack passionné
      </h1>

      <div className="flex flex-col gap-10 text-xl text-gray-300 leading-relaxed">
        <p>
          Je conçois des applications sur mesure avec <strong>Symfony</strong>, <strong>React</strong> ou <strong>Next.js</strong> pour répondre aux vrais besoins métier.
        </p>
        <p>
          Des acteurs comme <strong>ENEDIS</strong>, <strong>la CPAM</strong> ou <strong>l’UIMM</strong> m’ont fait confiance pour développer des solutions robustes et modernes.
        </p>
        <p>
          Je partage également mon expertise en formant les futurs développeurs du numérique.
        </p>
        <p className="italic text-gray-400 text-base">
          Ma force : un équilibre entre maîtrise technique, clarté pédagogique et sens du résultat.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
        <a href="#contact" className="btn btn-primary">Me contacter</a>
        <a href="/assets/documents/CV.pdf" className="btn btn-outline btn-secondary" target="_blank">
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
}