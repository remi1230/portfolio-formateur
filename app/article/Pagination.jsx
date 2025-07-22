import clsx from 'clsx';

export default function Pagination({ currentPage, totalPages, onPaginate }) {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center">
      <ul className="pagination flex flex-wrap gap-2">
        {/* Précédent */}
        <li>
          <button
            onClick={() => onPaginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={clsx(
              "btn btn-sm btn-outline",
              { "btn-disabled": currentPage === 1 }
            )}
          >
            Précédent
          </button>
        </li>

        {/* Numéros de page */}
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => onPaginate(number)}
              className={clsx(
                "btn btn-sm btn-outline",
                { "btn-active btn-important": number === currentPage }
              )}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Suivant */}
        <li>
          <button
            onClick={() => onPaginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={clsx(
              "btn btn-sm btn-outline",
              { "btn-disabled": currentPage === totalPages }
            )}
          >
            Suivant
          </button>
        </li>
      </ul>
    </nav>
  );
}