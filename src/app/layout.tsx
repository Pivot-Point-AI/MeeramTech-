import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://meeramtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MeeramTech — Transforming Ideas Into Digital Reality",
    template: "%s | MeeramTech",
  },
  description:
    "MeeramTech delivers enterprise-grade technology solutions — network infrastructure, cloud modernization, digital solutions, and cybersecurity.",
  keywords: [
    "IT solutions",
    "network infrastructure",
    "cloud modernization",
    "cybersecurity",
    "digital transformation",
    "enterprise technology",
    "MeeramTech",
  ],
  authors: [{ name: "MeeramTech", url: siteUrl }],
  creator: "MeeramTech",
  publisher: "MeeramTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MeeramTech",
    title: "MeeramTech — Transforming Ideas Into Digital Reality",
    description:
      "MeeramTech delivers enterprise-grade technology solutions — network infrastructure, cloud modernization, digital solutions, and cybersecurity.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MeeramTech — Transforming Ideas Into Digital Reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeeramTech — Transforming Ideas Into Digital Reality",
    description:
      "MeeramTech delivers enterprise-grade technology solutions — network infrastructure, cloud modernization, digital solutions, and cybersecurity.",
    images: ["/images/og-image.png"],
    creator: "@meeramtech",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
