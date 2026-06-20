 "use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090A0B] border-b border-[#333B40B2] bg-black/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4  lg:h-[93px] h-[72px]">
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-80"
          aria-label="NQB8 Home"
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#8F999E] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#0A89FF] px-5 py-3.5 text-[14px] text-[#060708] font-medium text-black transition-all hover:bg-[#0A84FF]/90 active:scale-[0.98]"
          >
            Partner with Us
          </Link>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/[0.06] bg-black lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-[15px] font-medium text-white/80 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#contact"
                className={cn(
                  "mt-4 inline-flex h-11 items-center justify-center rounded-full bg-[#0A89FF] text-sm text-[#060708] font-medium text-black"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Partner with Us
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
