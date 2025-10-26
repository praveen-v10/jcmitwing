import "./globals.css";
import { Poppins, Noto_Sans_Tamil } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Load both fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500", "700"],
  variable: "--font-tamil",
});

export const metadata = {
  title: "JCM Makal Mandram",
  description: "ஜே.சி.எம் மக்கள் மன்றம் - Empowering the people of Puducherry",
  icons: {
    icon: "/logo.png", // Favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ta">
  <body className={`${poppins.variable} ${notoTamil.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
