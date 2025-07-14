import ContactForm from './ContactForm';
import ContactTestimony from './ContactTestimony';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0f172a]rounded-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Parlons de <span className="text-brand-important">votre projet</span>
      </h2>
      <p className="mb-8">
        Vous pouvez également me contacter par un mail :
        <a href="mailto:remitafforeau@gmail.com" className="link px-1">
          remitafforeau@gmail.com
        </a>
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <ContactForm />
        <ContactTestimony />
      </div>
    </section>
  );
}
