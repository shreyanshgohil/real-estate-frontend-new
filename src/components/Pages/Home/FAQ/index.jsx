import Image from "next/image";
import React from "react";

const FAQ = () => {
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
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    <span className="serial-numb">1. </span> What is Pillar real
                    estate?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      {" "}
                      Most Islamic centers offer charity programs, counseling,
                      and financial assistance for those in need. Non-Muslims
                      are welcome to visit mosques. They should dress modestly
                      and remove their shoes upon entering. You can attend
                      community events, volunteer at the mosque, join study
                      circles, or participate in outreach programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    <span className="serial-numb">2. </span> How to work pillar
                    all services?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      {" "}
                      Most Islamic centers offer charity programs, counseling,
                      and financial assistance for those in need. Non-Muslims
                      are welcome to visit mosques. They should dress modestly
                      and remove their shoes upon entering. You can attend
                      community events, volunteer at the mosque, join study
                      circles, or participate in outreach programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    <span className="serial-numb">3. </span> What resources are
                    available for interfaith dialogue?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      {" "}
                      Most Islamic centers offer charity programs, counseling,
                      and financial assistance for those in need. Non-Muslims
                      are welcome to visit mosques. They should dress modestly
                      and remove their shoes upon entering. You can attend
                      community events, volunteer at the mosque, join study
                      circles, or participate in outreach programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    <span className="serial-numb">4. </span> What programs are
                    available for developer?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      {" "}
                      Most Islamic centers offer charity programs, counseling,
                      and financial assistance for those in need. Non-Muslims
                      are welcome to visit mosques. They should dress modestly
                      and remove their shoes upon entering. You can attend
                      community events, volunteer at the mosque, join study
                      circles, or participate in outreach programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-5"
                    aria-expanded="false"
                    aria-controls="collapse-5"
                  >
                    <span className="serial-numb">5. </span> How can I
                    contribute to the local real estate?
                  </button>
                </div>
                <div
                  id="collapse-5"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-5"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      {" "}
                      Most Islamic centers offer charity programs, counseling,
                      and financial assistance for those in need. Non-Muslims
                      are welcome to visit mosques. They should dress modestly
                      and remove their shoes upon entering. You can attend
                      community events, volunteer at the mosque, join study
                      circles, or participate in outreach programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
