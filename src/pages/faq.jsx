import Layout from "@/components/Layout";
import React, { useEffect, useLayoutEffect } from "react";
import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import { animationMoving } from "@/utils/animation";
const faq = () => {
  useLayoutEffect(() => {
    animationMoving();
  }, []);

  const breadCumData = {
    title: "FAQS",
    page: "FAQS",
    baseUrl: "/",
    base: "Home",
  };
  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <div class="th-blog-wrapper blog-details space">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-xxl-4 col-lg-5">
              <aside class="sidebar-area">
                <div class="title-area text-left pe-xxl-5">
                  <p class="sub-title">
                    {" "}
                    <span class="double-line"></span>FAQ
                  </p>
                  <h2 class="sec-title">
                    What would you like to know about pillar?
                  </h2>
                  <p class="sec-text">
                    Ancilla cogo cognomen absorbeo coerceo apto. Ago vulgaris
                    absens decor. Valetudo urbs sollers. Ter tricesimus currus
                    aro vilis suadeo ulterius aveho.
                  </p>
                  <a href="about.html" class="th-btn bg-theme pill">
                    {" "}
                    Free Consultation{" "}
                  </a>
                </div>
                <div class="widget bg-smoke faq">
                  <div class="th-widget-contact">
                    <div class="info-box">
                      <div class="info-box_icon">
                        <i class="fas fa-phone"></i>
                      </div>
                      <p class="info-box_text">
                        <a href="tel:+00123456789012" class="info-box_link">
                          +00 (123) 456 789 012
                        </a>
                      </p>
                    </div>
                    <div class="info-box">
                      <div class="info-box_icon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <p class="info-box_text">
                        <a
                          href="mailto:infomail123@domain.com"
                          class="info-box_link"
                        >
                          infomail123@domain.com
                        </a>
                      </p>
                    </div>
                    <div class="info-box">
                      <div class="info-box_icon">
                        <i class="fas fa-location-dot"></i>
                      </div>
                      <p class="info-box_text">
                        West 2nd lane, Inner circular road, New York City
                      </p>
                    </div>
                  </div>
                </div>
                <div class="widget bg-smoke">
                  <h3 class="widget_title">Contact Us</h3>
                  <div class="contact-form-widget">
                    <form action="#" class="newsletter-form">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="email"
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Your Phone"
                          required=""
                        />
                      </div>
                      <div class="form-group mb-4">
                        <textarea
                          name="Your message"
                          id="message"
                          cols="30"
                          rows="3"
                          class="form-control"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div class="form-btn pt-2">
                        <button type="submit" class="th-btn radius">
                          Send Us
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
            <div class="col-xxl-7 col-lg-7">
              <div class="th-faq-wrapper">
                <div class="accordion accordion" id="faqAccordion">
                  <div class="accordion-card">
                    <div class="accordion-header">
                      <button class="accordion-button " type="button">
                        <span class="serial-numb">1. </span> What is Pillar real
                        estate?
                      </button>
                    </div>
                    <div id="collapse-1" class="accordion-collapse">
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
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
                        <span class="serial-numb">2. </span> How to work pillar
                        all services?
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
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
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
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
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
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
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
                        <span class="serial-numb">5. </span> How can I
                        contribute to the local real estate?
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
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-6">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-6"
                        aria-expanded="false"
                        aria-controls="collapse-6"
                      >
                        <span class="serial-numb">6. </span> What are the
                        benefits of adopting sustainable practices?
                      </button>
                    </div>
                    <div
                      id="collapse-6"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-6"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-7">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-7"
                        aria-expanded="false"
                        aria-controls="collapse-7"
                      >
                        <span class="serial-numb">7. </span> How does technology
                        impact social interactions?
                      </button>
                    </div>
                    <div
                      id="collapse-7"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-7"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-8">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-8"
                        aria-expanded="false"
                        aria-controls="collapse-8"
                      >
                        <span class="serial-numb">8. </span> What are the latest
                        trends in digital marketing?
                      </button>
                    </div>
                    <div
                      id="collapse-8"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-8"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-9">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-9"
                        aria-expanded="false"
                        aria-controls="collapse-9"
                      >
                        <span class="serial-numb">9. </span> How can design
                        thinking improve problem-solving?
                      </button>
                    </div>
                    <div
                      id="collapse-9"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-9"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-10">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-10"
                        aria-expanded="false"
                        aria-controls="collapse-10"
                      >
                        <span class="serial-numb">10. </span> What role does
                        diversity play in innovation?
                      </button>
                    </div>
                    <div
                      id="collapse-10"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-10"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-11">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-11"
                        aria-expanded="false"
                        aria-controls="collapse-11"
                      >
                        <span class="serial-numb">11. </span> How can data
                        analytics drive business decisions?
                      </button>
                    </div>
                    <div
                      id="collapse-11"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-11"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-12">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-12"
                        aria-expanded="false"
                        aria-controls="collapse-12"
                      >
                        <span class="serial-numb">12. </span> What ethical
                        considerations are important in AI development?
                      </button>
                    </div>
                    <div
                      id="collapse-12"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-12"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-13">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-13"
                        aria-expanded="false"
                        aria-controls="collapse-13"
                      >
                        <span class="serial-numb">13. </span> How can user
                        experience design enhance customer satisfaction?
                      </button>
                    </div>
                    <div
                      id="collapse-13"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-13"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-14">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-14"
                        aria-expanded="false"
                        aria-controls="collapse-14"
                      >
                        <span class="serial-numb">14. </span> What impact does
                        cultural diversity have on team performance?
                      </button>
                    </div>
                    <div
                      id="collapse-14"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-14"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-card ">
                    <div class="accordion-header" id="collapse-item-15">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-15"
                        aria-expanded="false"
                        aria-controls="collapse-15"
                      >
                        <span class="serial-numb">15. </span> How can businesses
                        promote environmental sustainability in their
                        operations?
                      </button>
                    </div>
                    <div
                      id="collapse-15"
                      class="accordion-collapse collapse "
                      aria-labelledby="collapse-item-15"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          {" "}
                          Most Islamic centers offer charity programs,
                          counseling, and financial assistance for those in
                          need. Non-Muslims are welcome to visit mosques. They
                          should dress modestly and remove their shoes upon
                          entering. You can attend community events, volunteer
                          at the mosque, join study circles, or participate in
                          outreach programs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default faq;
