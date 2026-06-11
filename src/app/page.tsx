import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import ExcellenceStats from "@/components/ExcellenceStats";
import HowWeDeliver from "@/components/HowWeDeliver";
import ITSolutions from "@/components/ITSolutions";
import Industries from "@/components/Industries";
import TechPartners from "@/components/TechPartners";
import Testimonials from "@/components/Testimonials";
import VideoGallery from "@/components/VideoGallery";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://meeramtech.com" },
  openGraph: { url: "https://meeramtech.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MeeramTech",
  url: "https://meeramtech.com",
  logo: "https://meeramtech.com/images/icon.png",
  description:
    "MeeramTech delivers enterprise-grade technology solutions — network infrastructure, cloud modernization, digital solutions, and cybersecurity.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://meeramtech.com/contact",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <ExcellenceStats />
      <HowWeDeliver />
      <ITSolutions />
      <Industries />
      <TechPartners />
      <Testimonials />
      <VideoGallery />
      {/* <SolutionsSection /> */}
      <Footer />
    </main>
  );
}
