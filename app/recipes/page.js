import RecipeExplorer from "@/components/RecipeExplorer";
import { recipes } from "@/lib/recipes";

export const metadata = {
  title: "Recipes | FlavOriz"
};

export default function RecipesPage() {
  return (
    <main className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">Recipes</p>
        <h1>Find the next plate worth repeating.</h1>
        <p>
          Filter by craving, then open the full recipe for ingredients, steps, timing, and a few
          small notes that make the dish easier to land.
        </p>
      </section>
      <RecipeExplorer recipes={recipes} showHeading={false} />
    </main>
  );
}
