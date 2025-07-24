import StackPresentation from './StackPresentation';
import StackTitle from './StackTitle';

function StackSection() {
  return (
    <section id="skills" className="scroll-mt-28">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-6 items-center">
          {/* Composant de gauche avec la grille d'icônes */}
          <div className="order-2 lg:order-1">
            <StackPresentation />
          </div>

          {/* Composant de droite avec le texte */}
          <div className="order-1 lg:order-2">
            <StackTitle />
          </div>
        </div>
        <div className="md:hidden">
          <p className="mt-6 prose">
            <strong>Ma méthode : </strong>livrer rapidement une première version (ship first), puis itérer en continu.
            Grâce à une stack moderne et complète, je prends en charge toutes les dimensions d’un projet,
            pour qu’une simple idée prenne forme en un produit fiable et sécurisé.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StackSection;