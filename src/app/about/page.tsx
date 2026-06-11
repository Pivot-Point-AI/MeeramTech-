import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutWhatWeDo from "@/components/AboutWhatWeDo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MeeramTech's mission, vision, and the team behind our enterprise technology solutions.",
  alternates: { canonical: "https://meeramtech.com/about" },
  openGraph: {
    title: "About Us — MeeramTech",
    description:
      "Learn about MeeramTech's mission, vision, and the team behind our enterprise technology solutions.",
    url: "https://meeramtech.com/about",
  },
  twitter: {
    title: "About Us — MeeramTech",
    description:
      "Learn about MeeramTech's mission, vision, and the team behind our enterprise technology solutions.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <AboutHero />
      <AboutWhatWeDo />
      <Footer />
    </main>
  );
}
