export default function QuotedBlock({ children }) {
  return (
    <blockquote className="border-l-4 border-gray-400 pl-4 italic text-white">
      <span className="text-3xl leading-none align-top font-serif">“</span>
      {children}
      <span className="text-3xl leading-none align-bottom font-serif">”</span>
    </blockquote>
  );
}