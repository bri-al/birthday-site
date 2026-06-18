import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MI AMOR",
  description: "A birthday surprise created with infinite love. Every pixel, every word, every heartbeat in this website is dedicated to you.",
  openGraph: {
    title: "MI AMOR",
    description: "A birthday surprise created with infinite love.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#fefaf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="font-sans bg-warmWhite text-foreground antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
