import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog | FlavOriz"
};

export default function BlogPage() {
  return (
    <main className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">Blog</p>
        <h1>Small notes from a lively kitchen.</h1>
        <p>
          Ideas for sauces, shopping, prep, and the tiny moves that make simple food taste more
          awake.
        </p>
      </section>

      <section className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.title}>
            <img src={post.image} alt={post.title} />
            <div>
              <span>{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link className="text-link" href="/recipes">
                Cook something close
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
