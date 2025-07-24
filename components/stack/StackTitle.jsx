function StackTitle() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold">
        Voici mes stacks de 
        <span className="text-brand-important"> prédilection</span>
      </h2>
      <p className="hidden md:block md:mt-6 mt-0 prose">
        Ma méthode : livrer rapidement une première version (ship first), puis itérer en continu.
        Grâce à une stack moderne et complète, je prends en charge toutes les dimensions d’un projet,
        pour qu’une simple idée prenne forme en un produit fiable et sécurisé.
      </p>
    </div>
  );
}

export default StackTitle;