import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const footerLinks = {
  Company: ["About us", "Our stories", "Work with us", "User testimonials"],
  Support: ["FAQ", "Membership", "User policy", "Customer support"],
  Contact: ["Phone number", "Email address", "Social media", "Company location"]
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="newsletter-panel">
        <div>
          <p className="eyebrow">Join FlavOriz</p>
          <h2>
            Enter <span>FLAVORIZ</span>
          </h2>
          <p>Join FlavOriz now and start receiving bright recipes for real-life cooking.</p>
        </div>
        <NewsletterForm />
      </section>

      <section className="footer-links">
        <div>
          <Link className="footer-logo" href="/">
            FLAV<span>ORIZ</span>
          </Link>
          <p>Copyright 2026 FlavOriz.</p>
        </div>
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3>{heading}</h3>
            {links.map((link) => (
              <a href="/contact" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </section>
    </footer>
  );
}
