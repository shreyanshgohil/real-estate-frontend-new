import React, { useEffect } from "react";

const WhatWeDo = () => {
  return (
    <section className="why-sec-2 bg-smoke space" id="why-sec">
      <div
        className="shape-mockup jump d-none d-md-block"
        data-top="16%"
        data-right="7%"
        // style={{ top: "20%", right: "7%" }}
        // style="top: 20%; right: 5%;"
      >
        <img src="/images/home/why-2-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <p
                className="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span> What We Do
              </p>
              <h2
                className="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                The Benefits For You
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30 align-items-center justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6 fadeinup wow">
            <div className="why-card-1 style-2">
              <div className="hover-icon">
                <img src="/images/home/why-hover-icon-1.png" alt="img" />
              </div>
              <h4 className="count">01</h4>
              <div className="why-card-1__icon">
                <img src="/images/icons/why-icon-1-1.svg" alt="image" />
              </div>
              <div className="why-card-1__content">
                <h3 className="box-title">Find your perfect new home</h3>
                <p className="box-text">
                  {" "}
                  Velox surgo clarus tantillus confido carus video lumen cedo
                  virtus spes decerno.{" "}
                </p>
              </div>
              <div className="why-card-1__bottom">
                <a
                  className="th-btn style3 pill bg-white w-100"
                  href="property-details.html"
                >
                  Find a Home
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 fadeinup wow">
            <div className="why-card-1 style-2">
              <div className="hover-icon">
                <img src="/images/home/why-hover-icon-1.png" alt="img" />
              </div>
              <h4 className="count">02</h4>
              <div className="why-card-1__icon">
                <img src="/images/icons/why-icon-1-2.svg" alt="image" />
              </div>
              <div className="why-card-1__content">
                <h3 className="box-title">You build wealth effortlessly </h3>
                <p className="box-text">
                  {" "}
                  Altus cedo tantillus video patrocinor valeo carus subseco
                  vestrum credo virtus.{" "}
                </p>
              </div>
              <div className="why-card-1__bottom">
                <a
                  className="th-btn style3 pill bg-white w-100"
                  href="property-details.html"
                >
                  Sell a Home
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 fadeinup wow">
            <div className="why-card-1 style-2">
              <div className="hover-icon">
                <img src="/images/home/why-hover-icon-1.png" alt="img" />
              </div>
              <h4 className="count">03</h4>
              <div className="why-card-1__icon">
                <img src="/images/icons/why-icon-1-3.svg" alt="image" />
              </div>
              <div className="why-card-1__content">
                <h3 className="box-title">
                  You rent and love it like your own
                </h3>
                <p className="box-text">
                  Tantillus certe patrocinor video adipisci valeo carus. Subseco
                  vestrum taedium.
                </p>
              </div>
              <div className="why-card-1__bottom">
                <a
                  className="th-btn style3 pill bg-white w-100"
                  href="property-details.html"
                >
                  Rent a Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
