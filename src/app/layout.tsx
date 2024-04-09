import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//👇 Configure the object for our second font
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "MERKARTE",
  keywords: ["MERKARTE", "Art Goma"],
  authors: [{ name: "Karen" }],
  creator: "Karen",
  description: "¡Únete a la inauguración de MERKARTE, un evento que celebra el talento joven canario!",
  openGraph: {
    title: "MERKARTE",
    description: "¡Únete a la inauguración de MERKARTE, un evento que celebra el talento joven canario!",
    url: "https://merkarte.vercel.app",
    siteName: "MERKARTE",
    images: [
      {
        url: "https://merkarte.vercel.app/og-image.png",
        width: 300,
        height: 300,
      },
      {
        url: "https://merkarte.vercel.app/og-image.png",
        width: 600,
        height: 600,
        alt: "ArtGoma",
      },
    ],
    type: "website",
    locale: "es",
  },
  icons: {
    icon: ["/favicon-32x32.png"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
