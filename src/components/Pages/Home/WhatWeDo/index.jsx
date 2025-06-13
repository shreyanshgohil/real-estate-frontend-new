import React, { useEffect } from "react";

const WhatWeDo = () => {
  useEffect(() => {
    function shapeMockup(elements) {
      elements.forEach(function (element) {
        const shapeTop = element.getAttribute("data-top");
        const shapeRight = element.getAttribute("data-right");
        const shapeBottom = element.getAttribute("data-bottom");
        const shapeLeft = element.getAttribute("data-left");

        Object.assign(element.style, {
          top: shapeTop,
          right: shapeRight,
          bottom: shapeBottom,
          left: shapeLeft,
        });

        element.removeAttribute("data-top");
        element.removeAttribute("data-right");
        element.removeAttribute("data-bottom");
        element.removeAttribute("data-left");

        if (element.parentElement) {
          element.parentElement.classList.add("shape-mockup-wrap");
        }
      });
    }

    // Initialize on DOMContentLoaded
    // document.addEventListener("DOMContentLoaded", function () {
    const shapeElements = document.querySelectorAll(".shape-mockup");

    if (shapeElements.length > 0) {
      shapeMockup(Array.from(shapeElements));
    }
    // });
  }, []);
  return (
    <section class="why-sec-2 bg-smoke space" id="why-sec">
      <div
        class="shape-mockup jump d-none d-md-block"
        data-top="16%"
        data-right="7%"
        // style={{ top: "20%", right: "7%" }}
        // style="top: 20%; right: 5%;"
      >
        <img src="/images/home/why-2-shape.png" alt="img" />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7">
            <div class="title-area text-center">
              <p
                class="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span class="double-line"></span> What We Do
              </p>
              <h2
                class="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                The Benefits For You
              </h2>
            </div>
          </div>
        </div>
        <div class="row gy-30 align-items-center justify-content-center">
          <div class="col-xl-4 col-lg-6 col-md-6 fadeinup wow">
            <div class="why-card-1 style-2">
              <div class="hover-icon">
                <img src="/images/home/why-hover-icon-1.png" alt="img" />
              </div>
              <h4 class="count">01</h4>
              <div class="why-card-1__icon">
                <img src="/images/icons/why-icon-1-1.svg" alt="image" />
              </div>
              <div class="why-card-1__content">
                <h3 class="box-title">Find your perfect new home</h3>
                <p class="box-text">
                  {" "}
                  Velox surgo clarus tantillus confido carus video lumen cedo
                  virtus spes decerno.{" "}
                </p>
              </div>
              <div class="why-card-1__bottom">
                <a
                  class="th-btn style3 pill bg-white w-100"
                  href="property-details.html"
                >
                  Find a Home
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 fadeinup wow">
            <div class="why-card-1 style-2">
              <div class="hover-icon">
                <img src="/images/home/why-hover-icon-1.png" alt="img" />
              </div>
              <h4 class="count">02</h4>
              <div class="why-card-1__icon">
                <img src="/images/icons/why-icon-1-2.svg" alt="image" />
              </div>
              <div class="why-card-1__content">
                <h3 class="box-title">You build wealth effortlessly </h3>
                <p class="box-text">
                  {" "}
                  Altus cedo tantillus video patrocinor valeo carus subseco
                  vestrum credo virtus.{" "}
                </p>
              </div>
              <div class="why-card-1__bottom">
                <a
                  class="th-btn style3 pill bg-white w-100"
                  href="property-details.html"
                >
                  Sell a Home
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 fadeinup wow">
            <div class="why-card-1 style-2">
              <div class="hover-icon">
                <img src="/images/home/why-hover-icon-1.png" alt="img" />
              </div>
              <h4 class="count">03</h4>
              <div class="why-card-1__icon">
                <img src="/images/icons/why-icon-1-3.svg" alt="image" />
              </div>
              <div class="why-card-1__content">
                <h3 class="box-title">You rent and love it like your own</h3>
                <p class="box-text">
                  Tantillus certe patrocinor video adipisci valeo carus. Subseco
                  vestrum taedium.
                </p>
              </div>
              <div class="why-card-1__bottom">
                <a
                  class="th-btn style3 pill bg-white w-100"
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
