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
    question: "What is Conveyor?",
    answer:
      "Conveyor is institutional crypto infrastructure: a corporate platform, DeFi dashboard, and professional trading workspace published at conveyor.finance.",
  },
  {
    question: "Who is Conveyor built for?",
    answer:
      "Funds, market-making desks, treasuries, and operators who need a single view of portfolio, liquidity, and execution.",
  },
  {
    question: "Does Conveyor replace our exchange accounts?",
    answer:
      "No. Conveyor sits above wallets and venues so you can observe, route, and control activity without ripping out existing connectivity.",
  },
  {
    question: "Which chains and assets are supported?",
    answer:
      "The dashboard is designed for Ethereum, Arbitrum, Optimism, Polygon, and Base, with major spot markets in the trading terminal.",
  },
  {
    question: "Is this financial advice or a live brokerage?",
    answer:
      "This corporate site and product previews are for demonstration. Trading involves risk. Conveyor does not provide investment advice.",
  },
  {
    question: "How do we get access?",
    answer:
      "Request access via conveyor.finance/contact. We provision dashboard and trading environments per organization.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className=" py-16 text-white">
      <div className="container">
        <div className=" mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-green-400 uppercase text-sm">
              Popular questions
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Learn more about Conveyor
            </h2>
            <p className="text-gray-400 mt-2">
              Infrastructure for professional digital-asset operations
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
