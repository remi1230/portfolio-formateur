export default function BioText() {
  return (
    <div className="w-full md:w-7/12 text-center md:text-left space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
        Développeur web full stack passionné
      </h1>

      <p className="text-lg text-gray-300 leading-relaxed">
        Je conçois des applications sur mesure avec <strong className="text-white">Symfony</strong>, <strong className="text-white">React</strong> ou <strong className="text-white">Next.js</strong> pour répondre aux vrais besoins métier.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed">
        Des acteurs comme <strong className="text-white">ENEDIS</strong>, <strong className="text-white">la CPAM</strong> ou <strong className="text-white">l’UIMM</strong> m’ont fait confiance pour développer des solutions robustes et modernes.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed">
        Je partage également mon expertise en formant les futurs développeurs du numérique.
      </p>

      <p className="italic text-gray-400 text-base">
        Ma force : un équilibre entre maîtrise technique, clarté pédagogique et sens du résultat.
      </p>

      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
        <a href="#contact" className="btn btn-primary">Me contacter</a>
        <a href="/assets/documents/CV.pdf" className="btn btn-outline btn-secondary" target="_blank">
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
}