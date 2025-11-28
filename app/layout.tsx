import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merouane Amqor - Technical Lead & Software Engineer",
  description: "CV professionnel de Merouane Amqor - Leader technique spécialisé en architecture logicielle, DevOps et innovation numérique responsable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
