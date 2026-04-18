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
      <head>
        <script
          src="https://web-application-for-analyzing-websi-virid.vercel.app/tracker.js"
          data-endpoint="https://web-application-for-analyzing-websi-virid.vercel.app/api/collect"
          data-project="73b1c939-d8b6-4266-b14c-73aed68f856d"
          defer
        />
      </head>
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
