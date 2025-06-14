import React from "react";

const About = () => {
  return (
    <section
      className="about-1-wrapper space overflow-hidden shape-mockup-wrap"
      id="about-sec"
    >
      <div className="shape-mockup " data-bottom="0" data-left="0">
        <img src="/images/home/about-2-shape.png" alt="img" />
      </div>
      <div
        className="shape-mockup spin d-none d-lg-block"
        data-bottom="11%"
        data-left="5%"
      >
        <img src="/images/home/circle-start.png" alt="img" />
      </div>
      <div className="container">
        <div className="row gy-40 gx-70 justify-content-center">
          <div className="col-xl-7">
            <div
              className="img-box1 about-1 fadeinup wow"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="about-logo-wrap-2">
                <div className="logo-icon-wrap">
                  <div className="logo-icon">
                    <img src="/images/home/logo-circle-icon.png" alt="img" />
                  </div>
                  <div className="logo-icon-wrap__text">
                    <span className="logo-animation">
                      PILLAR REAL ESTATE HOME * REAL ESTATE
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-left">
                <div className="img-box">
                  <img src="/images/home/about-1-left-1.jpg" alt="Image" />
                </div>
                <div className="img-box small">
                  <img src="/images/home/about-1-left-2.jpg" alt="Image" />
                </div>
              </div>
              <div className="about-middle">
                <img
                  className="tilt-active"
                  src="/images/home/about-1-middle.jpg"
                  alt="Image"
                />
              </div>
              <div className="about-right">
                <div className="img-box small">
                  <img src="/images/home/about-1-right-1.jpg" alt="Image" />
                </div>
                <div className="img-box big">
                  <img src="/images/home/about-1-right-2.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="title-area text-left mb-50">
              <p
                className="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span> About Us
              </p>
              <h2
                className="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Discover Our Luxury Property, with Full Amenities
              </h2>
              <p
                className="sec-text fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                Simply scan the QR code on the right with your phone’s camera,
                then click the prompt to open the app download page.
              </p>
            </div>
            <div className="row gy-4 gx-60 mb-4">
              <div className="col-lg-6 col-md-6 fadeinup wow">
                <div className="about-1-item">
                  <div className="icon">
                    <img src="/images/icons/about-1-1.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="box-title">Quality Services</h3>
                    <p className="box-text">
                      Deals with issues in the exhaust system, ensuring{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 fadeinup wow">
                <div className="about-1-item">
                  <div className="icon">
                    <img src="/images/icons/about-1-2.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="box-title">Clients Feedback</h3>
                    <p className="box-text">
                      Ensuring the exhaust system deals issues properly.{" "}
                    </p>
                    <p className="box-text"> </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 fadeinup wow">
                <div className="about-1-item">
                  <div className="icon">
                    <img src="/images/icons/about-1-3.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="box-title">Space Belongings</h3>
                    <p className="box-text">
                      Ensuring that issues in the system are dealt with.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 fadeinup wow">
                <div className="about-1-item">
                  <div className="icon">
                    <img src="/images/icons/about-1-4.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="box-title">Personal Liability</h3>
                    <p className="box-text">
                      Exhaust system deals with all issues efficiency.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="about-bottom-wrap fadeinup wow">
                  <a href="about.html" className="th-btn bg-black pill">
                    More About Us
                  </a>
                  <div className="about1-call-wrapper">
                    <div className="icon">
                      <i className="fa-regular fa-phone"></i>
                    </div>
                    <div className="content">
                      <p>Free Consulting</p>
                      <a href="tel:+00(123)45678900" className="link">
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
