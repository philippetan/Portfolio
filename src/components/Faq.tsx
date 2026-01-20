import { CircleQuestionMark } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I primarily work with React, TypeScript, and Tailwind CSS on the frontend, and Node.js, Firebase, and Express on the backend.",
  },
  {
    question: "Do you have professional or team experience?",
    answer:
      "Yes. I’ve worked in team environments during my internship and professional role, collaborating with designers and other developers using Git.",
  },
  {
    question: "Are you available for freelance or contract work?",
    answer: "Yes, I'm open to short-term freelance projects.",
  },
  {
    question: "How do you approach learning new technologies?",
    answer:
      "I learn by building small projects, reading documentation, and applying new tools to real-world problems.",
  },
  {
    question: "Do you prefer working independently or in a team?",
    answer:
      "I’m comfortable working independently but thrive in team environments where collaboration and feedback are encouraged.",
  },
  {
    question: "How do you handle deadlines and project timelines?",
    answer:
      "I prioritize tasks, break them into manageable pieces, and communicate progress regularly to ensure timely delivery.",
  },
  {
    question: "What is your approach to debugging and problem-solving?",
    answer:
      "I methodically isolate issues, use tools like console logs and debuggers, research solutions when necessary, and test thoroughly before finalizing fixes.",
  },
  {
    question: "Are you comfortable working with version control?",
    answer:
      "Absolutely. I regularly use Git, and GitHub for version control, branching, and collaboration in team projects.",
  },
  {
    question: "What are your long-term career goals?",
    answer:
      "I aim to grow as a full-stack developer, contribute to impactful projects, and continuously improve my skills in modern web technologies.",
  },
];

const FAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      ref={sectionRef}
      className="h-130 md:h-full w-full md:w-1/2"
    >
      <Card className="flex flex-col bg-transparent border-secondary-dark p-6 h-full w-full">
        <CardTitle>
          <Label className="text-primary-dark dark:text-primary-white text-lg font-bold">
            <CircleQuestionMark size={20} /> FAQ
          </Label>
        </CardTitle>
        <CardContent className="p-0 flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar">
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="font-bold text-primary-dark dark:text-primary-white cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-dark dark:text-primary-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FAQ;
