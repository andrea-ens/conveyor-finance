"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";

const faqData = [
  {
    question: "What is Conveyor Finance?",
    answer:
      "A founder-led company building on-chain trading infrastructure and the public organization around it. conveyor.finance is the corporate website — not a live brokerage.",
  },
  {
    question: "Is this a licensed exchange?",
    answer:
      "No. This domain does not operate a matching engine, take custody, or provide investment advice. Product studies are labeled and figures are illustrative.",
  },
  {
    question: "Who leads the company?",
    answer:
      "Andrea is Founder and CEO, and acting CTO. Technical direction stays with the CEO until a dedicated CTO seat is justified. Open engineering and product roles are listed on Careers.",
  },
  {
    question: "What work do you show?",
    answer:
      "Case studies with descriptions and screenshots. We do not publish deployed app links as if they were production venues.",
  },
  {
    question: "How do I apply or get in touch?",
    answer:
      "Roles: conveyor.finance/careers and careers@conveyor.finance. Everything else: hello@conveyor.finance or the contact page.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className=" py-16 text-white">
      <div className="container">
        <div className=" mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary uppercase text-sm tracking-[0.16em]">
              Company
            </p>
            <h2 className="text-3xl md:text-4xl font-medium mt-2">
              Questions we expect
            </h2>
            <p className="text-white/50 mt-2">
              Short answers. Longer ones live on Company, Blog, and Careers.
            </p>
          </div>
          <Accordion className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 rounded-lg border-none px-4"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-4 **:data-[slot=accordion-trigger-icon]:hidden">
                  {item.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
