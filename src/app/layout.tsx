import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ibW Kampagnen-Brandguide",
  description: "Kampagnen-Brandguide der ibW Höhere Fachschule Südostschweiz — Leitidee, Farben, Schriften, Icons und Kachelraster.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
