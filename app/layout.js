import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "FlavOriz | Culinary Insights",
  description: "Explore colorful recipes, kitchen stories, and real community submissions."
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <div className="ambient-shell">
          <div className="site-frame">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
