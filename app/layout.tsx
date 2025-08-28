import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farruh Zoirov - Backend Engineer",
  description:
    "Node.js, Express.js, Nest.js va boshqa zamonaviy texnologiyalarda samarali, xavfsiz va kengaytiriladigan backend tizimlar ishlab chiqishga ixtisoslashgan dasturchi.",
  keywords: `
    backend developer, node.js backend, express.js developer, nest.js, api development,
    database design, REST API, backend engineer, software developer,
    microservices architecture, scalable backend, server-side programming, cloud deployment,
    docker backend, nginx configuration, devops integration, backend optimization,
    postgres, mysql, mongodb developer, authentication, jwt, authorization,
    backend freelancer, backend xizmatlari, O'zbekistonda backend dasturchi,
    Toshkent backend developer, server konfiguratsiya, API yaratish,
    backend tizimlar, high performance backend, freelance backend,
    dasturchi ijaraga, backend security, backend performance tuning,
    backend developer Uzbekistan, backend developer Tashkent, API integration,
    server setup, pm2 deployment, web services backend, software engineer,
    backend solutions, scalable APIs, efficient backend design, server monitoring
  `,
  authors: [{ name: "Farruh Zoirov" }],
  openGraph: {
    title: "Farruh Zoirov - Backend Engineer",
    description:
      "Node.js, Express.js, Nest.js va boshqa texnologiyalar yordamida kuchli backend yechimlar yaratuvchi dasturchi.",
    url: "https://farruhzoir.uz",
    siteName: "Farruh Zoirov",
    images: [
      {
        url: "https://farruhzoir.uz/avatar.jpg",
        width: 400,
        height: 400,
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farruh Zoirov - Backend Engineer",
    description:
      "Node.js, Express.js, Nest.js va zamonaviy texnologiyalar yordamida kuchli backend tizimlar ishlab chiqishga ixtisoslashgan dasturchi.",
    images: ["https://farruhzoir.uz/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://farruhzoir.uz/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://farruhzoir.uz/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "name": "Farruh Zoirov"
          }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Portfolio", "item": "https://farruhzoir.uz/portfolio" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://farruhzoir.uz/contact" },
              { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://farruhzoir.uz/services" },
              { "@type": "ListItem", "position": 4, "name": "Blog", "item": "https://farruhzoir.uz/blog" }
            ]
          }`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Google Analytics */}
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-4WWMZTXWBW`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4WWMZTXWBW');
          `}
          </Script>
        </>
      </body>
    </html>
  );
}
