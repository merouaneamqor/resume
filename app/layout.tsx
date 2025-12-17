import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merouane Amqor - Technical Lead & Software Engineer",
  description: "Professional resume of Merouane Amqor - Technical leader specialized in software architecture, DevOps and responsible digital innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
