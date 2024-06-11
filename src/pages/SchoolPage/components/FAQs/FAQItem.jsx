import React, { useState } from "react";

const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  





  return (
    
    <div className={`accordion-item mb-4 ${isOpen ? 'accordion-open' : ''}`}>

      <div
        className={`accordion-title d-flex align-items-center justify-content-between ${isOpen ? 'accordion-open' : ''}`}
        onClick={toggleAccordion}
      >
        <h3 className="faq-ques">{title}</h3>
        <span className="fs-2">{isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>}</span>
      </div>
      {isOpen && (
        <div className="accordion-content px-4 py-3">{content}</div>
      )}
    </div>
  );
};

export default FAQItem;
