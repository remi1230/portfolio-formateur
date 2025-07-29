function StackTitle() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold">
        Voici mes stacks de 
        <span className="text-brand-important"> prédilection</span>
      </h2>
      <div className="hidden md:block md:mt-6 mt-0 prose">
        <p>Robustesse, modernité et adaptabilité.</p> Ils couvrent les principaux besoins d’un projet web :
        frontend, backend, base de données, déploiement et travail collaboratif.
        <p>J’interviens en formation sur des stacks modernes et professionnalisantes.</p>
        <p>Former, c'est aussi donner des clés pour comprendre l'écosystème, rester curieux, et faire des choix techniques durables.</p>
      </div>
    </div>
  );
}

export default StackTitle;