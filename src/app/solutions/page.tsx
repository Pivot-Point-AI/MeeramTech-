import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore MeeramTech's real-world digital solutions across fintech, healthcare, e-commerce and more.",
  keywords: [
    "fintech solutions",
    "healthcare IT",
    "e-commerce technology",
    "digital solutions",
    "MeeramTech",
  ],
  alternates: { canonical: "https://meeramtech.com/solutions" },
  openGraph: {
    title: "Solutions — MeeramTech",
    description:
      "Explore MeeramTech's real-world digital solutions across fintech, healthcare, e-commerce and more.",
    url: "https://meeramtech.com/solutions",
  },
  twitter: {
    title: "Solutions — MeeramTech",
    description:
      "Explore MeeramTech's real-world digital solutions across fintech, healthcare, e-commerce and more.",
  },
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col w-full pt-20 lg:pt-0">
      <Navbar theme="light" />
      <SolutionsSection />
      <br></br>
      <Footer />
    </main>
  );
}
