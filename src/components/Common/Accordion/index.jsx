import React, { useEffect, useRef, useState } from "react";

const Accordion = (props) => {
  const ref = useRef(null);
  const [height, setHeight] = useState("0px");
  const { title, children, toggleFaqHandler, openFAQ, index } = props;

  useEffect(() => {
    if (ref.current && index === openFAQ) {
      setHeight(ref?.current?.scrollHeight);
    } else {
      setHeight("0px");
    }
  }, [openFAQ]);
  return (
    <div class="accordion-card">
      <div class="accordion-header" onClick={() => toggleFaqHandler(index)}>
        <button
          class="accordion-button"
          type="button"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div
        class="accordion-collapse"
        ref={ref}
        style={{ height: height, overflow: "hidden", transition: "all 0.5s" }}
      >
        <div class="accordion-body">
          <p class="faq-text">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
