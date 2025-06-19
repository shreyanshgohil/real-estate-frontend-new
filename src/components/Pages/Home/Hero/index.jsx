import React, { useEffect } from "react";

const Hero = () => {
  return (
    <div className="th-hero-wrapper hero-2" id="hero">
      <div className="slider-2-scroll-down scroll-down">
        <a href="#about-sec" className="scroll-wrap">
          <span></span>
        </a>
        <span className="scroll-text">Scroll</span>
      </div>

      <div className="th-container22">
        <div
          className="hero-inner hero-style2"
          data-mask-src="/images/home/hero-2-bg-mask.png"
        >
          <video
            className="hero-video"
            src="/images/home/hero-2-video.mp4"
            loop={true}
            muted={true}
            autoPlay={true}
            playsInline={true}
          />
          <div className="row justify-content-center gy-50 gx-40 align-items-center">
            <div className="col-xxl-8 col-xl-9 col-lg-11">
              <div className="hero-2-content text-center">
                <div
                  className="hero-img-shape-2 fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  <div className="logo-icon-wrap">
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="logo-icon popup-video"
                    >
                      <i className="fa-sharp fa-solid fa-play"></i>
                    </a>
                    <div className="logo-icon-wrap__text">
                      <span className="logo-animation">
                        PILLAR REAL ESTATE HOME * REAL ESTATE
                      </span>
                    </div>
                  </div>
                </div>
                <h1
                  className="hero-title fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  {" "}
                  Find Your{" "}
                  <span className="title2 text-theme"> Perfect Home </span> For
                  Spending Life{" "}
                </h1>

                <div
                  className="hero-search-wrapper fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <form action="/submit-form">
                    <div className="hero-search-group-wrapper">
                      <div className="form-group">
                        <label for="select_make1">Property Type</label>
                        <select
                          name="select_make"
                          id="select_make1"
                          className="form-select nice-select"
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
                      <div className="form-group">
                        <label for="name11">Location</label>
                        <div className="style-border style-radius col-12">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name11"
                            placeholder="Find a location"
                          />
                          <div className="icon">
                            <img
                              src="/images/icons/location-icon.svg"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="Looking">Keyword</label>
                        <div className="style-border style-radius col-12">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="Looking"
                            placeholder="Looking For?"
                          />
                        </div>
                      </div>
                      <div className="advance-btn-wrapper">
                        <div className="advance-search-btn advance-search-active">
                          <div className="th-btn pill style3 search-btn-item">
                            Advanced <i className="fa-solid fa-sliders-up"></i>
                          </div>
                        </div>
                        <button className="th-btn pill bg-black">
                          <i className="far fa-search me-2"></i> Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="property-type-wrap fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.7s"
                >
                  <div className="property-type-item">
                    <div className="icon">
                      <img
                        src="/images/icons/property-item-icon-2-1.svg"
                        alt="img"
                      />
                    </div>
                    <span>Penthouse</span>
                  </div>
                  <div className="property-type-item">
                    <div className="icon">
                      <img
                        src="/images/icons/property-item-icon-2-2.svg"
                        alt="img"
                      />
                    </div>
                    <span>Townhouse</span>
                  </div>
                  <div className="property-type-item">
                    <div className="icon">
                      <img
                        src="/images/icons/property-item-icon-2-3.svg"
                        alt="img"
                      />
                    </div>
                    <span>Villa</span>
                  </div>
                  <div className="property-type-item">
                    <div className="icon">
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
