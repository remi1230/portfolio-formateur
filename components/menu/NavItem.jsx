import Link from "next/link";

export default function NavItem({ href, label, onClick }) {
  return (
    <li>
      <Link href={href} onClick={onClick} className="text-brand-fg font-semibold px-4 py-2 relative rounded-md transition duration-300 hover:bg-white/10">
        {label}
      </Link>
    </li>
  );
}