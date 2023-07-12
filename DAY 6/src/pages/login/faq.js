import React, { useState } from 'react';
import "./faq.css"
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of appliances do you sell?',
      answer:
        'We offer a wide range of appliances, including refrigerators, dishwashers, washing machines, dryers, ovens, stoves, microwaves, air conditioners, and more.'
    },
    {
      question: 'Are your appliances brand new?',
      answer:
        'Yes, all our appliances are brand new, unless otherwise specified. We do not sell used or refurbished appliances.'
    },
    {
      question: 'Do you offer warranties on your appliances?',
      answer:
        'Yes, we provide warranties on our appliances. The duration and coverage of the warranty may vary depending on the manufacturer and the specific appliance. Please inquire about the warranty details for the appliance you are interested in.'
    },
    {
      question: 'Can I return or exchange an appliance?',
      answer:'Our return and exchange policy may vary depending on the appliance and the specific circumstances. We recommend reviewing our return policy or contacting our customer service for detailed information.' 
       },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-page">
      <br></br><br></br><br></br><br></br>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <h3 className="faq-question">{faq.question}</h3>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
