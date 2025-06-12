import React from "react";

const About = () => {
  return (
    <section
      class="about-1-wrapper space overflow-hidden shape-mockup-wrap"
      id="about-sec"
    >
      <div class="shape-mockup " data-bottom="0" data-left="0">
        <img src="/images/home/about-2-shape.png" alt="img" />
      </div>
      <div
        class="shape-mockup spin d-none d-lg-block"
        data-bottom="11%"
        data-left="5%"
      >
        <img src="/images/home/circle-start.png" alt="img" />
      </div>
      <div class="container">
        <div class="row gy-40 gx-70 justify-content-center">
          <div class="col-xl-7">
            <div
              class="img-box1 about-1 fadeinup wow"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div class="about-logo-wrap-2">
                <div class="logo-icon-wrap">
                  <div class="logo-icon">
                    <img src="/images/home/logo-circle-icon.png" alt="img" />
                  </div>
                  <div class="logo-icon-wrap__text">
                    <span class="logo-animation">
                      PILLAR REAL ESTATE HOME * REAL ESTATE
                    </span>
                  </div>
                </div>
              </div>
              <div class="about-left">
                <div class="img-box">
                  <img src="/images/home/about-1-left-1.jpg" alt="Image" />
                </div>
                <div class="img-box small">
                  <img src="/images/home/about-1-left-2.jpg" alt="Image" />
                </div>
              </div>
              <div class="about-middle">
                <img
                  class="tilt-active"
                  src="/images/home/about-1-middle.jpg"
                  alt="Image"
                />
              </div>
              <div class="about-right">
                <div class="img-box small">
                  <img src="/images/home/about-1-right-1.jpg" alt="Image" />
                </div>
                <div class="img-box big">
                  <img src="/images/home/about-1-right-2.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5">
            <div class="title-area text-left mb-50">
              <p
                class="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span class="double-line"></span> About Us
              </p>
              <h2
                class="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Discover Our Luxury Property, with Full Amenities
              </h2>
              <p
                class="sec-text fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                Simply scan the QR code on the right with your phone’s camera,
                then click the prompt to open the app download page.
              </p>
            </div>
            <div class="row gy-4 gx-60 mb-4">
              <div class="col-lg-6 col-md-6 fadeinup wow">
                <div class="about-1-item">
                  <div class="icon">
                    <img src="/images/icons/about-1-1.svg" alt="icon" />
                  </div>
                  <div class="content">
                    <h3 class="box-title">Quality Services</h3>
                    <p class="box-text">
                      Deals with issues in the exhaust system, ensuring{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 fadeinup wow">
                <div class="about-1-item">
                  <div class="icon">
                    <img src="/images/icons/about-1-2.svg" alt="icon" />
                  </div>
                  <div class="content">
                    <h3 class="box-title">Clients Feedback</h3>
                    <p class="box-text">
                      Ensuring the exhaust system deals issues properly.{" "}
                    </p>
                    <p class="box-text"> </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 fadeinup wow">
                <div class="about-1-item">
                  <div class="icon">
                    <img src="/images/icons/about-1-3.svg" alt="icon" />
                  </div>
                  <div class="content">
                    <h3 class="box-title">Space Belongings</h3>
                    <p class="box-text">
                      Ensuring that issues in the system are dealt with.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 fadeinup wow">
                <div class="about-1-item">
                  <div class="icon">
                    <img src="/images/icons/about-1-4.svg" alt="icon" />
                  </div>
                  <div class="content">
                    <h3 class="box-title">Personal Liability</h3>
                    <p class="box-text">
                      Exhaust system deals with all issues efficiency.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="about-bottom-wrap fadeinup wow">
                  <a href="about.html" class="th-btn bg-black pill">
                    More About Us
                  </a>
                  <div class="about1-call-wrapper">
                    <div class="icon">
                      <i class="fa-regular fa-phone"></i>
                    </div>
                    <div class="content">
                      <p>Free Consulting</p>
                      <a href="tel:+00(123)45678900" class="link">
                        +00 (123) 456789 00
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
