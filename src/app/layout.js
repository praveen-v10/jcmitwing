import "./globals.css";
import { Poppins, Noto_Sans_Tamil } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  metadataBase: new URL("https://jcmitwing.com"),
  title: {
    default: "JCM Makal Mandram | ஜே.சி.எம் மக்கள் மன்றம்",
    template: "%s | JCM Makal Mandram",
  },
  description:
    "ஜே.சி.எம் மக்கள் மன்றம் – Empowering the people of Puducherry through unity, development, and social service.",
  keywords: [
    "jcmitwing",
    "jcm it wing",
    "JCM it wing",
    "JCM Makal Mandram",
    "ஜே.சி.எம் மக்கள் மன்றம்",
    "Puducherry",
    "Community",
    "Welfare",
  ],
  authors: [{ name: "JCM Makal Mandram" }],
  openGraph: {
    title: "JCM Makal Mandram",
    description:
      "ஜே.சி.எம் மக்கள் மன்றம் – Empowering the people of Puducherry through unity and service.",
    url: "https://jcmitwing.com",
    siteName: "JCM Makal Mandram",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "JCM Makal Mandram Logo",
      },
    ],
    locale: "ta_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCM Makal Mandram",
    description:
      "ஜே.சி.எம் மக்கள் மன்றம் – Empowering the people of Puducherry through unity and development.",
    images: ["/logo.png"],
    creator: "@jcmitwing",
  },
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "https://jcmitwing.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ta">
      <body className={`${poppins.variable} ${notoTamil.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />

        {/* ✅ Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JCM Makal Mandram",
              alternateName: "ஜே.சி.எம் மக்கள் மன்றம்",
              url: "https://jcmitwing.com",
              logo: "https://jcmitwing.com/logo.png",
              sameAs: [
                "https://facebook.com/jcmitwing",
                "https://instagram.com/jcmitwing",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
