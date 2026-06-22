"use client";

import { useState } from "react";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const inputClass =
    "w-full rounded-[10px] border-[#333B40BF] bg-[#151619] px-4 py-3 text-[14px] text-[#F0F2ED] placeholder:text-[#8F999E] focus-visible:ring-1 focus-visible:ring-[#0A89FF] focus-visible:border-[#0A89FF] transition-colors";

  return (
    <section className="bg-[#060708] pt-20 pb-16 lg:pt-[96px] lg:pb-[80px]">
      <Container>
        <FadeInView>
          <h1 className="font-heading text-3xl font-extrabold leading-[104%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[44px] lg:text-[64px]">
            Partner with NQB8
          </h1>
          <p className="mt-5 max-w-[510px] text-base leading-[150%] text-[#8F999E] sm:text-[18px] sm:mt-7">
            Institutional partnerships, platform collaborations, and strategic conversations.
          </p>
        </FadeInView>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-7 lg:grid-cols-[1fr_1.6fr]">
          {/* Contact info card */}
          <FadeInView>
            <div className="rounded-[18px] border border-[#333B40BF] bg-[#0E0F11] p-7 space-y-[25px] h-fit">
              <div>
                <p className="text-[11px] font-semibold uppercase text-[#0A89FF]">OFFICE</p>
                <p className="mt-[7px] text-base font-medium text-[#F0F2ED]">Lagos, Nigeria</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-[#0A89FF]">EMAIL</p>
                <p className="mt-[7px] text-base font-medium text-[#F0F2ED]">partners@nqb8.com</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-[#0A89FF]">PHONE</p>
                <p className="mt-[7px] text-base font-medium text-[#F0F2ED]">+234 [PHONE]</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-[#0A89FF]">SOCIAL</p>
                <p className="mt-[7px] text-base font-medium text-[#F0F2ED]">LinkedIn · X</p>
              </div>
            </div>
          </FadeInView>

          {/* Contact form */}
          <FadeInView delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[18px] border border-[#333B40BF] bg-[#0E0F11] p-5 space-y-5 sm:p-8"
            >
              <div>
                <label className="block text-xs text-[#8F999E] font-semibold mb-3" htmlFor="name">
                  Name*
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  className={inputClass}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-[#8F999E] font-semibold mb-3" htmlFor="email">
                  Email*
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-[#8F999E] font-semibold mb-3" htmlFor="organization">
                  Organization
                </label>
                <Input
                  id="organization"
                  type="text"
                  className={inputClass}
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-[#8F999E] font-semibold mb-3" htmlFor="message">
                  Message*
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  className={`${inputClass} resize-none min-h-[90px]`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex h-[45px] items-center justify-center rounded-full bg-[#0A89FF] px-8 text-sm font-semibold text-black transition-all hover:bg-[#0A89FF]/90 active:scale-[0.98]"
                >
                  Send message
                </button>
              </div>
            </form>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
