export const metadata = {
  title: "About | FlavOriz"
};

const values = [
  {
    title: "Flavor first",
    text: "Every recipe starts with contrast: fresh herbs, acidity, heat, texture, or a small surprise."
  },
  {
    title: "Weeknight honest",
    text: "The steps stay practical, the shopping lists stay sane, and substitutions are welcome."
  },
  {
    title: "Community tested",
    text: "Readers can send notes, questions, and recipe requests through the working contact form."
  }
];

export default function AboutPage() {
  return (
    <main className="page-stack">
      <section className="page-hero about-hero">
        <img
          src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1500&q=80"
          alt="Friends sharing a colorful dinner table"
        />
        <div>
          <p className="eyebrow">About FlavOriz</p>
          <h1>Recipes with color, speed, and a point of view.</h1>
          <p>
            FlavOriz gathers punchy recipes and kitchen notes for cooks who like fresh plates
            without precious rules.
          </p>
        </div>
      </section>

      <section className="value-grid">
        {values.map((item) => (
          <article className="info-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="story-section">
        <div>
          <p className="eyebrow">Kitchen rhythm</p>
          <h2>Food should feel generous before it feels complicated.</h2>
        </div>
        <p>
          The site is built around the same flow as the design: scan by category, open the
          complete recipe, and use the forms to join the conversation. Submissions are saved
          locally when you run the app, so testing the flow is real and visible.
        </p>
      </section>
    </main>
  );
}
