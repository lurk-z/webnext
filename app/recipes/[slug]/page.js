import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/lib/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    return {
      title: "Recipe | FlavOriz"
    };
  }

  return {
    title: `${recipe.title} | FlavOriz`,
    description: recipe.summary
  };
}

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <Link className="text-link" href="/recipes">
        Back to recipes
      </Link>

      <section className="recipe-cover">
        <img src={recipe.image} alt={recipe.title} />
        <div>
          <p className="eyebrow">{recipe.categoryLabel}</p>
          <h1>{recipe.title}</h1>
          <p>{recipe.summary}</p>
          <dl className="recipe-meta">
            <div>
              <dt>Time</dt>
              <dd>{recipe.time}</dd>
            </div>
            <div>
              <dt>Level</dt>
              <dd>{recipe.level}</dd>
            </div>
            <div>
              <dt>Views</dt>
              <dd>{recipe.views}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="recipe-columns">
        <article>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Method</h2>
          <ol>
            {recipe.method.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>
    </main>
  );
}
