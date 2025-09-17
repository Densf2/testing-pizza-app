"use client";

import { useState } from "react";
import { Metadata } from "next";

// FAQ data
const faqData = [
  {
    question: "What are your delivery hours?",
    answer:
      "We deliver from 11 AM to 11 PM, 7 days a week. Our kitchen operates throughout these hours to ensure fresh, hot pizzas for our customers.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "We guarantee delivery within 30 minutes of order confirmation. If we're late, you get a discount on your next order!",
  },
  {
    question: "Do you offer vegan or gluten-free options?",
    answer:
      "Yes! We have a dedicated vegan menu with plant-based cheese and toppings. We also offer gluten-free crusts for customers with dietary restrictions.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery, credit/debit cards, UPI payments, and popular digital wallets like Paytm, PhonePe, and Google Pay.",
  },
  {
    question: "Can I customize my pizza?",
    answer:
      "Absolutely! You can add or remove toppings, choose your preferred crust type, and even create your own unique pizza combination.",
  },
  {
    question: "Do you have a minimum order value?",
    answer:
      "Yes, we have a minimum order value of 200 grn for delivery. However, there's no minimum for pickup orders.",
  },
  {
    question: "What if I'm not satisfied with my order?",
    answer:
      "Customer satisfaction is our priority. If you're not happy with your order, please contact us immediately and we'll make it right - whether that's a replacement, refund, or store credit.",
  },
  {
    question: "Do you deliver to my area?",
    answer:
      "We deliver within a 10km radius of our outlets. You can check if we deliver to your area by entering your pin code on our website or app.",
  },
  {
    question: "Can I schedule my delivery for later?",
    answer:
      "Yes, you can schedule your delivery up to 2 hours in advance. Just select your preferred delivery time during checkout.",
  },
  {
    question: "What is the Operative Window for Pizza Express?",
    answer: "We at Pizza Express operate from 11 AM to 11 PM",
  },
];

function PageInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-16 overflow-hidden">
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-white animate-pulse"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4">{children}</h1>
      </div>
    </div>
  );
}

function Accordion({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm">
      <div
        className={`p-6 cursor-pointer transition-colors ${
          isOpen ? "bg-orange-50" : "bg-white hover:bg-gray-50"
        }`}
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button className="text-orange-600 hover:text-orange-700 transition-colors">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-6 pt-0 bg-white">
          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <PageInfo>FAQ</PageInfo>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our service, delivery, and
              menu options.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.question}
                isOpen={openIndex === index}
                onToggle={() => toggleAccordion(index)}
              >
                {faq.answer}
              </Accordion>
            ))}
          </div>

          <div className="mt-12 text-center bg-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our customer support
              team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@pizzaexpress.com"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Email Support
              </a>
              <a
                href="tel:+915551234567"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Call Us: (555) 123-PIZZA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
