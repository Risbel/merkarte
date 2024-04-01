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
  title: "Merkarte",
  description: "A web app to recolect confirmations to our Mercarte event.",
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
