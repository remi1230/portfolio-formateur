import StackPresentation from './StackPresentation';
import StackTitle from './StackTitle';

// Plus besoin d'importer les icônes ou de définir le tableau ici.

function StackSection() {
  return (
    <section className="">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Composant de gauche avec la grille d'icônes */}
          <div className="order-2 lg:order-1">
            {/* On ne passe plus de props ! */}
            <StackPresentation />
          </div>

          {/* Composant de droite avec le texte */}
          <div className="order-1 lg:order-2">
            <StackTitle />
          </div>

        </div>
      </div>
    </section>
  );
}

export default StackSection;