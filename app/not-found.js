import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>That recipe slipped off the counter.</h1>
      <p>Head back to the recipe wall and pick another plate.</p>
      <Link className="dark-button" href="/recipes">
        Browse recipes
      </Link>
    </main>
  );
}
