import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="logo" href="/" aria-label="FlavOriz home">
        FLAV<span>ORIZ</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <form className="search-box" action="/recipes">
        <label className="sr-only" htmlFor="site-search">
          Search recipes
        </label>
        <input id="site-search" name="q" placeholder="Search..." />
        <button type="submit" aria-label="Search">
          <span>Go</span>
        </button>
      </form>
    </header>
  );
}
