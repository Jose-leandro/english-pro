import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
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
  title: "Aulas de inglês online particulares | Aprenda rápido com English Pro",
  description:
    "Aprenda inglês online em até 6 meses com aulas particulares personalizadas. Agende sua aula experimental gratuita hoje mesmo com a English Pro.",
  openGraph: {
    title: "Aprenda rápido com English Pro",
    description:
      "Professora de inglês particular com método prático e personalizado. Aula grátis!",
    url: "https://english-pro-iota.vercel.app/",
    siteName: "English Pro",
    images: [
      {
        url: "https://english-pro-iota.vercel.app/ChatGPT-thumbnail-ezgif.com-optijpeg.jpg",
        width: 1200,
        height: 630,
        alt: "Banner do English Pro: aprenda inglês rápido online com aula experimental grátis e conversação prática em 6 meses",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons8-open-book-481-ezgif.com-optiwebp.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@englishpro" />
        <meta
          name="twitter:title"
          content="Aulas de inglês online particulares | English Pro"
        />
        <meta
          name="twitter:description"
          content="Aprenda inglês rápido com aulas particulares online. Aula experimental gratuita disponível."
        />
        <meta
          name="twitter:image"
          content="https://english-pro-iota.vercel.app/ChatGPT-thumbnail-ezgif.com-optijpeg.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "English Pro",
              url: "https://englishpro.com",
              logo: "https://englishpro.com/icons8-open-book-481-ezgif.com-optiwebp.webp",
              image:
                "https://english-pro-iota.vercel.app/ChatGPT-thumbnail-ezgif.com-optijpeg.jpg",
              description:
                "Aulas de inglês online particulares com professora experiente. Aprenda em até 6 meses com foco em conversação prática.",
              telephone: "+55-11-99999-9999",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
              areaServed: "BR",
              sameAs: [
                "https://facebook.com/englishpro",
                "https://instagram.com/englishpro",
                "https://linkedin.com/company/englishpro",
              ],
              offers: {
                "@type": "Offer",
                name: "Aula de Inglês Online Particular",
                price: "0",
                priceCurrency: "BRL",
                description:
                  "Agende sua aula experimental gratuita de inglês online com foco em conversação.",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quanto tempo vou levar para falar inglês?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Com o método da English Pro, em média nossos alunos conseguem se comunicar em inglês em até 6 meses, dependendo da dedicação.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Posso fazer uma aula experimental grátis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim! Você pode agendar uma aula experimental gratuita para conhecer a metodologia e tirar suas dúvidas antes de começar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "As aulas são individuais ou em grupo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Todas as aulas são individuais e 100% personalizadas de acordo com seus objetivos e nível de inglês.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Aulas de Inglês Online English Pro",
              description:
                "Aulas particulares de inglês online com foco em conversação prática.",
              brand: {
                "@type": "Organization",
                name: "English Pro",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "87",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "BRL",
                price: "0",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="from-slate-50 to-white text-slate-900 min-h-screen bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:text-slate-100">
            {children}
          </div>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
