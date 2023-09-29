import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Flexible",
  description: "Show and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
