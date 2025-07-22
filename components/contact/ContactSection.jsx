import ContactForm from './ContactForm';
import ContactTestimony from './ContactTestimony';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-brand-bg rounded-xl xl:mx-auto mx-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Parlons de <span className="text-brand-important">votre projet</span>
      </h2>
      <p className="mb-8 prose">
        Vous pouvez également me contacter par un mail :
        <a href="mailto:remitafforeau@gmail.com" className="link px-1">
          remitafforeau@gmail.com
        </a>
      </p>

      <div className="grid xl:grid-cols-[12fr_7fr] gap-10">
        <ContactForm />
        <ContactTestimony />
      </div>
    </section>
  );
}
