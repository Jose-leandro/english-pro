import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aprenda Inglês Online | Aulas Particulares com Teacher John",
  description:
    "Aulas personalizadas de inglês com foco em conversação prática. Agende sua aula experimental gratuita hoje mesmo.",
  openGraph: {
    title: "Aprenda Inglês Online com Teacher John",
    description:
      "Professora de inglês particular com método prático e personalizado. Aula grátis!",
    url: "https://seusite.com",
    siteName: "Teacher John",
    images: [
      {
        url: "https://seusite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teacher John dando aula online",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
