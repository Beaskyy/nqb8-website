import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Contact — NQB8",
  description:
    "Partner with NQB8. Institutional partnerships, platform collaborations, and strategic conversations.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
