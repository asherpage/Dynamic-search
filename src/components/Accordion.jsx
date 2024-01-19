import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleAccordion = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const accordionData = [
    {
      title: 'Hobbies',
      content: 'I skateboard, snowboard, play basketball and go to the gym',
    },
    {
      title: 'School',
      content: 'i go to Sandra Day Oconner High School and go to Westmec NEC',
    },
    {
      title: 'Work',
      content: 'I have been working at mrShine Carwash since march of 2022',
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((section, index) => (
        <div key={index} className="accordion-section">
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <h3>{activeSection === index ? <FaMinus /> : <FaPlus />} {section.title}</h3>
          </div>
          {activeSection === index && (
            <div className="accordion-content">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
