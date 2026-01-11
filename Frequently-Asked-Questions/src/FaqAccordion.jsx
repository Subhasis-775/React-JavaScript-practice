import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./styles.css";

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleChange = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() => handleChange(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
export default FaqAccordion;