'use client';

export default function NavItem({ href, label, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick?.();

    const targetId = href.replace(/^#/, '');
    const el = document.getElementById(targetId);
    if (!el) return;

    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;

    const style = window.getComputedStyle(el);
    const scrollMT = parseFloat(style.scrollMarginTop) || 0;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      scrollMT;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="btn btn-ghost btn-sm px-4 py-6 rounded-xl text-sm font-medium hover:bg-white/10"
      >
        {label}
      </a>
    </li>
  );
}
