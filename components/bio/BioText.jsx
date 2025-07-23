export default function BioText() {
  return (
    <div className="w-full md:w-7/12 text-center md:text-left space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        Développeur web full stack <span className="text-brand-important">passionné</span>
      </h1>

      <div className="prose prose-sm xl:prose-lg">
        <p>
          Je conçois des applications sur mesure avec <strong className="text-brand-prose-fg">Symfony</strong>, <strong>React</strong> ou <strong>Next.js</strong> pour répondre aux vrais besoins métier.
        </p>
        <p>
          Des acteurs comme <strong>ENEDIS</strong>, <strong>la CPAM</strong> ou <strong>l’UIMM</strong> m’ont fait confiance pour développer des solutions robustes et modernes.
        </p>
        <p>
          Je partage également mon expertise en formant les futurs développeurs du numérique.
        </p>
        <p className="italic text-brand-fo text-base">
          Ma force : expertise technique, compréhension métier, réactivité et orientation résultats.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
        <a href="#contact" className="btn btn-primary">Me contacter</a>
        <a href="/assets/documents/CV.pdf" download="download" className="btn btn-outline btn-secondary" target="_blank">
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
}