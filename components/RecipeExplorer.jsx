"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories } from "@/lib/recipes";

export default function RecipeExplorer({ recipes, showHeading = true }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleRecipes = useMemo(() => {
    if (activeCategory === "all") {
      return recipes;
    }

    return recipes.filter((recipe) => recipe.category === activeCategory);
  }, [activeCategory, recipes]);

  return (
    <section className="recipe-explorer">
      {showHeading ? (
        <div className="section-heading">
          <p className="eyebrow">What to Cook?</p>
          <h2>
            What to <span>Cook?</span>
          </h2>
        </div>
      ) : null}

      <div className="category-pills" role="tablist" aria-label="Recipe categories">
        <button
          type="button"
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          All Types
        </button>
        {categories.map((category) => (
          <button
            type="button"
            className={activeCategory === category.id ? "active" : ""}
            onClick={() => setActiveCategory(category.id)}
            key={category.id}
          >
            <span aria-hidden="true">{category.code}</span>
            {category.label}
          </button>
        ))}
      </div>

      <div className="recipe-grid">
        {visibleRecipes.map((recipe) => (
          <article className="recipe-card" key={recipe.slug}>
            <Link href={`/recipes/${recipe.slug}`} className="card-image-link">
              <img src={recipe.image} alt={recipe.title} />
              <span className="views">{recipe.views}</span>
            </Link>
            <div className="recipe-card-body">
              <span>{recipe.categoryLabel}</span>
              <h3>{recipe.title}</h3>
              <p>{recipe.summary}</p>
              <Link className="recipe-button" href={`/recipes/${recipe.slug}`}>
                See Complete Recipe
              </Link>
            </div>
          </article>
        ))}
      </div>

      {visibleRecipes.length === 0 ? (
        <p className="empty-state">No recipes in this category yet.</p>
      ) : null}
    </section>
  );
}
