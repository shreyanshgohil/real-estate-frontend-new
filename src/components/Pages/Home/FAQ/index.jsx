import React from "react";

const FAQ = () => {
  return (
    <div class="space bg-smoke">
      <div
        class="shape-mockup"
        data-bottom="0"
        data-left="0"
        style={{ bottom: 0, left: 0 }}
      >
        <img src="/images/home/faq-2-shape.png" alt="img" />
      </div>
      <div
        class="shape-mockup spin d-none d-lg-block"
        data-bottom="11%"
        data-left="7%"
      >
        <img src="/images/home/faq-2-circle-shape.png" alt="img" />
      </div>

      <div class="container">
        <div class="row justify-content-between gy-4">
          <div class="col-lg-5 col-xl-5 col-xxl-4">
            <div class="title-area text-left pe-xxl-5">
              <p
                class="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span class="double-line"></span>FAQ
              </p>
              <h2
                class="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                What would you like to know about pillar?
              </h2>
              <p
                class="sec-text fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                Ancilla cogo cognomen absorbeo coerceo apto. Ago vulgaris absens
                decor. Valetudo urbs sollers. Ter tricesimus currus aro vilis
                suadeo ulterius aveho.
              </p>
              <a
                href="about.html"
                class="th-btn bg-black pill fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                Free Consultation{" "}
              </a>
            </div>
          </div>
          <div class="col-lg-7 col-xl-7 col-xxl-7">
            <div class="accordion-1 accordion" id="faqAccordion">
              <div class="accordion-card active">
                <div class="accordion-header" id="collapse-item-1">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    <span class="serial-numb">1. </span> What is Pillar real
                    estate?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  class="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p class="faq-text">
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

              <div class="accordion-card ">
                <div class="accordion-header" id="collapse-item-2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    <span class="serial-numb">2. </span> How to work pillar all
                    services?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  class="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p class="faq-text">
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

              <div class="accordion-card ">
                <div class="accordion-header" id="collapse-item-3">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    <span class="serial-numb">3. </span> What resources are
                    available for interfaith dialogue?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  class="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p class="faq-text">
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

              <div class="accordion-card ">
                <div class="accordion-header" id="collapse-item-4">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    <span class="serial-numb">4. </span> What programs are
                    available for developer?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  class="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p class="faq-text">
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

              <div class="accordion-card ">
                <div class="accordion-header" id="collapse-item-5">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-5"
                    aria-expanded="false"
                    aria-controls="collapse-5"
                  >
                    <span class="serial-numb">5. </span> How can I contribute to
                    the local real estate?
                  </button>
                </div>
                <div
                  id="collapse-5"
                  class="accordion-collapse collapse "
                  aria-labelledby="collapse-item-5"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p class="faq-text">
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
