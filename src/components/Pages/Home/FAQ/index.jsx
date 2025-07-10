import Accordion from "@/components/Common/Accordion";
import { homePageFaq } from "@/constants/home";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFaq] = useState(0);

  const toggleFaqHandler = (faqIndex) => {
    if (openFAQ === faqIndex) {
      setOpenFaq(null);
    } else {
      setOpenFaq(faqIndex);
    }
  };
  return (
    <div className="space bg-smoke">
      <div
        className="shape-mockup"
        data-bottom="0"
        data-left="0"
        style={{ bottom: 0, left: 0 }}
      >
        <Image
          src="/images/home/faq-2-shape.png"
          width={796}
          height={386}
          alt=""
        />
      </div>
      <div
        className="shape-mockup spin d-none d-lg-block"
        data-bottom="11%"
        data-left="7%"
      >
        <Image
          src="/images/home/faq-2-circle-shape.png"
          height={64}
          width={64}
          alt=""
        />
      </div>

      <div className="container">
        <div className="row justify-content-between gy-4">
          <div className="col-lg-5 col-xl-5 col-xxl-4">
            <div className="title-area text-left pe-xxl-5">
              <p
                className="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span>FAQ
              </p>
              <h2
                className="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                What would you like to know about pillar?
              </h2>
              <p
                className="sec-text fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                Ancilla cogo cognomen absorbeo coerceo apto. Ago vulgaris absens
                decor. Valetudo urbs sollers. Ter tricesimus currus aro vilis
                suadeo ulterius aveho.
              </p>
              <a
                href="about.html"
                className="th-btn bg-black pill fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                Free Consultation{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-xl-7 col-xxl-7">
            <div className="accordion-1 accordion" id="faqAccordion">
              {homePageFaq.map((faq, index) => {
                return (
                  <Accordion
                    key={index}
                    title={faq.title}
                    openFAQ={openFAQ}
                    toggleFaqHandler={toggleFaqHandler}
                    index={index}
                  >
                    {faq.body}
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
