/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import "./Components.css"

const Accordion = ({ data }) => {
  const [accordionItems, setAccordionItems] = useState([]);

  React.useEffect(() => {
    const accordion = data.map(item => ({
      title: item.title,
      content: item.content,
      open: false
    }));
    setAccordionItems(accordion);
  }, [data]);

  const click = (item) => {
    const newAccordion = [...accordionItems];
    const index = newAccordion.indexOf(item);
    newAccordion[index].open = !newAccordion[index].open;
    setAccordionItems(newAccordion);
  };

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <div key={index}>
          <div
            className="title"
            onClick={() => click(item)}
          >
            <div className="arrow-wrapper">
              <i className={item.open ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"}></i>
            </div>
            <span className="title-text">
              {item.title}
            </span>
          </div>
          <div className={item.open ? "content content-open" : "content"}>
            <div className={item.open ? "content-text content-text-open" : "content-text"}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
