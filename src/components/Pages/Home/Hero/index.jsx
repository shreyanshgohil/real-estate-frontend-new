import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    function injector(element, splitter, klass, after) {
      const text = element.textContent;
      const parts = text.split(splitter);
      let inject = "";

      if (parts.length) {
        parts.forEach((item, i) => {
          inject += `<span class="${klass}${i + 1}">${item}</span>${after}`;
        });
        element.innerHTML = inject;
      }
    }

    const lettering = {
      letters: function (elements) {
        elements.forEach((el) => {
          injector(el, "", "char", "");
        });
      },

      words: function (elements) {
        elements.forEach((el) => {
          injector(el, " ", "word", " ");
        });
      },

      lines: function (elements) {
        const r = "eefec303079ad17405c889e092e105b0";
        elements.forEach((el) => {
          // Replace <br> tags with the hash
          el.innerHTML = el.innerHTML.replace(/<br\s*\/?>/gi, r);
          injector(el, r, "line", "");
        });
      },
    };

    // USAGE: Apply lettering to all elements with class "logo-animation"
    const elements = Array.from(document.querySelectorAll(".logo-animation"));
    lettering.letters(elements); // Equivalent to .lettering() or .lettering('letters')
  }, []);

  return (
    <div class="th-hero-wrapper hero-2" id="hero">
      <div class="slider-2-scroll-down scroll-down">
        <a href="#about-sec" class="scroll-wrap">
          <span></span>
        </a>
        <span class="scroll-text">Scroll</span>
      </div>

      <div class="th-container22">
        <div
          class="hero-inner hero-style2"
          data-mask-src="/images/home/hero-2-bg-mask.png"
        >
          <video
            class="hero-video"
            id="video"
            src="/images/home/hero-2-video.mp4"
            loop=""
            muted=""
            autoplay=""
          ></video>
          <div class="row justify-content-center gy-50 gx-40 align-items-center">
            <div class="col-xxl-8 col-xl-9 col-lg-11">
              <div class="hero-2-content text-center">
                <div
                  class="hero-img-shape-2 fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  <div class="logo-icon-wrap">
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      class="logo-icon popup-video"
                    >
                      <i class="fa-sharp fa-solid fa-play"></i>
                    </a>
                    <div class="logo-icon-wrap__text">
                      <span class="logo-animation">
                        PILLAR REAL ESTATE HOME * REAL ESTATE
                      </span>
                    </div>
                  </div>
                </div>
                <h1
                  class="hero-title fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  {" "}
                  Find Your{" "}
                  <span class="title2 text-theme"> Perfect Home </span> For
                  Spending Life{" "}
                </h1>

                <div
                  class="hero-search-wrapper fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <form action="/submit-form">
                    <div class="hero-search-group-wrapper">
                      <div class="form-group">
                        <label for="select_make1">Property Type</label>
                        <select
                          name="select_make"
                          id="select_make1"
                          class="form-select nice-select"
                        >
                          <option value="" disabled selected hidden>
                            Select Make
                          </option>
                          <option value="Apartment">Apartment</option>
                          <option value="House">House</option>
                          <option value="Villa">Villa</option>
                          <option value="Office">Office</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="name11">Location</label>
                        <div class="style-border style-radius col-12">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="name11"
                            placeholder="Find a location"
                          />
                          <div class="icon">
                            <img
                              src="/images/icons/location-icon.svg"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="Looking">Keyword</label>
                        <div class="style-border style-radius col-12">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="Looking"
                            placeholder="Looking For?"
                          />
                        </div>
                      </div>
                      <div class="advance-btn-wrapper">
                        <div class="advance-search-btn advance-search-active">
                          <div class="th-btn pill style3 search-btn-item">
                            Advanced <i class="fa-solid fa-sliders-up"></i>
                          </div>
                        </div>
                        <button class="th-btn pill bg-black">
                          <i class="far fa-search me-2"></i> Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  class="property-type-wrap fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.7s"
                >
                  <div class="property-type-item">
                    <div class="icon">
                      <img
                        src="/images/icons/property-item-icon-2-1.svg"
                        alt="img"
                      />
                    </div>
                    <span>Penthouse</span>
                  </div>
                  <div class="property-type-item">
                    <div class="icon">
                      <img
                        src="/images/icons/property-item-icon-2-2.svg"
                        alt="img"
                      />
                    </div>
                    <span>Townhouse</span>
                  </div>
                  <div class="property-type-item">
                    <div class="icon">
                      <img
                        src="/images/icons/property-item-icon-2-3.svg"
                        alt="img"
                      />
                    </div>
                    <span>Villa</span>
                  </div>
                  <div class="property-type-item">
                    <div class="icon">
                      <img
                        src="/images/icons/property-item-icon-2-4.svg"
                        alt="img"
                      />
                    </div>
                    <span>Apartments</span>
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

export default Hero;
