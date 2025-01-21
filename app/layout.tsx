import Navigation from "./components/navigation";
import "./global.css";

export const metadata = {
  title: "CertRanker",
  description: "Find learning resources for your favorite tech certifications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#080808", color: "#EDE7D9" }}>
        <Navigation />
        <main className="py-10 px-10">{children}</main>
        <footer className="text-center">
          Copyright &copy; 2025 CertRanker
        </footer>
      </body>
    </html>
  );
}
