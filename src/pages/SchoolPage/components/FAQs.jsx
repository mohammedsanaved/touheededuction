import React from "react";
import FAQItem from "./FAQs/FAQItem";
import "../styles/FAQs.css";

const FAQs = ({ faqs }) => {
  const items = [
    {
      title: "What is the admission procedure?",
      content: "Content for Accordion Item 1",
    },
    {
      title: "What is the admission procedure?",
      content: "Content for Accordion Item 2",
    },
    {
      title: "What is the admission procedure?",
      content: "Content for Accordion Item 3",
    },
    {
      title: "What is the admission procedure?",
      content: "Content for Accordion Item 4",
    },
    {
      title: "What is the admission procedure?",
      content: "Content for Accordion Item 5",
    },
  ];
  return (
    <div>
      <div className="faq-title">FAQs</div>
      <div className="accordion mt-3 mb-4 mx-auto">
        {faqs?.map((item, index) => (
          <FAQItem key={index} title={item.question} content={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
