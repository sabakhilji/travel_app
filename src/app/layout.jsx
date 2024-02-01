
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Travel",
  description: "Travel App for Camping",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <NavBar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </html>
  );
}