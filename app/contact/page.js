import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | FlavOriz"
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Send a recipe request, kitchen note, or collaboration idea.</h1>
        <p>
          The form posts to a Next.js API route and saves each message locally in
          <span className="inline-code"> data/contact-messages.json</span>.
        </p>
      </section>

      <section className="contact-layout">
        <ContactForm />
        <aside className="contact-aside">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
            alt="Hands preparing fresh vegetables in a kitchen"
          />
          <h2>We read every note.</h2>
          <p>
            Tell us what you want to cook next, what needs fixing, or what flavor problem is
            following you around the kitchen.
          </p>
        </aside>
      </section>
    </main>
  );
}
