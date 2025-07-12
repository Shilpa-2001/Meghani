import Nav from "./Nav"
// import whatapp from "./../assets/images/whatapp.png"
import Footer from "../components/Footer";

import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: "What is a Payment Gateway?",
    answer: "A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers."
  },
  {
    question: "What is a Payment Gateway?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos cumque totam inventore repellat architecto ab ad. Nemo, molestias illum eveniet nam beatae dolores obcaecati amet repellendus veritatis, hic sapiente!",
  },
  {
    question: "Do I need to pay Instapay even when there is no transaction going on?",
    answer: "No, you only pay when a transaction happens. No hidden fees."
  },
  {
    question: "What platforms does ACME support?",
    answer: "ACME supports web, mobile, and in-app platforms for seamless integration."
  },
  {
    question: "Does ACME support international payments?",
    answer: "Yes, ACME supports multiple currencies and international gateways."
  },
  {
    question: "Is there a setup or maintenance fee?",
    answer: "There is no setup fee. Annual maintenance depends on your plan."
  }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [answerTop, setAnswerTop] = useState(0);
  const questionRefs = useRef([]);

  useEffect(() => {
    if (activeIndex !== null && questionRefs.current[activeIndex]) {
      const selected = questionRefs.current[activeIndex];
      const containerTop = selected.parentElement.getBoundingClientRect().top;
      const selectedTop = selected.getBoundingClientRect().top;
      setAnswerTop(selectedTop - containerTop);
    }
  }, [activeIndex]);

  return (
   
    <div className="faq-container">
     <Nav/>
            <div className="faqs-1">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to the most common questions about Meghani Homex. If you need more <br /> help, feel free to contact us!</p>
      </div>
      <div className='faqs-container'>
      <div className="faq-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={el => questionRefs.current[index] = el}
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="circle" />
            <span className="question-text">{faq.question}</span>
            <span className="arrow">{'>'}</span>
          </div>
        ))}
      </div>

      <div className="faq-right">
        {activeIndex !== null && (
          <div className="faq-answer" style={{ top: answerTop }}>
              <h3 className="ques-ans">{faqs[activeIndex].question}</h3> 
         <p> {faqs[activeIndex].answer}</p>
          </div>
        )}
      </div>
      </div>
      <Footer/>
    </div>
  );
}
