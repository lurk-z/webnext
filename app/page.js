import Link from "next/link";
import RecipeExplorer from "@/components/RecipeExplorer";
import { recipes } from "@/lib/recipes";

const featured = recipes.slice(0, 4);

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-label="Culinary insights">
        <img
          src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=80"
          alt="Seared tuna, herbs, citrus, and rice arranged on a bright platter"
        />
        <div className="hero-copy">
          <p className="eyebrow">Fresh ideas for everyday tables</p>
          <h1>
            Explore <span>Culinary</span> Insights
          </h1>
          <p>
            Pick a craving, open a recipe, and bring sharp flavors into your next meal.
          </p>
        </div>
      </section>

      <RecipeExplorer recipes={recipes} />

      <section className="split-section">
        <div className="editorial-block">
          <p className="eyebrow">Seasonal picks</p>
          <h2>Bright plates for a busier week</h2>
          <p>
            Fast sauces, crisp vegetables, and pantry-friendly staples keep dinner feeling alive
            without turning the kitchen into a second shift.
          </p>
          <Link className="text-link" href="/recipes">
            Browse recipes
          </Link>
        </div>

        <div className="feature-grid">
          {featured.map((recipe) => (
            <Link href={`/recipes/${recipe.slug}`} className="mini-card" key={recipe.slug}>
              <img src={recipe.image} alt={recipe.title} />
              <span>{recipe.categoryLabel}</span>
              <strong>{recipe.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="community-band">
        <div>
          <p className="eyebrow">Join our community</p>
          <h2>Cook along with people who care about flavor.</h2>
        </div>
        <Link className="dark-button" href="/contact">
          Share your kitchen note
        </Link>
      </section>
    </main>
  );
}
