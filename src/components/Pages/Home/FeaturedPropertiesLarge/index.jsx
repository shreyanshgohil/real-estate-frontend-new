import React from "react";

const FeaturedPropertiesLarge = () => {
  return (
    <section class="popular-sec-1 space overflow-hidden bg-smoke">
      <div class="container">
        <div class="row justify-content-lg-between gy-4 justify-content-center align-items-center mb-40">
          <div class="col-lg-6">
            <div class="title-area text-left mb-2">
              <p
                class="sub-title feature-sec-v2"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span class="double-line"></span> Latest Properties
              </p>
              <h2
                class="sec-title feature-sec-v2"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Featured Properties
              </h2>
            </div>
          </div>
          <div class="col-lg-auto">
            <a
              href="property.html"
              class="th-btn tab-btn style3 pill feature-sec-v2"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              Browse Now
            </a>
          </div>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider has-shadow"
            id="featuresSlider"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"2"},"1400":{"slidesPerView":"2"}}, "autoplay": "true", "autoHeight": "true","spaceBetween":60}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="popular-list-1 style-2">
                  <div class="thumb-wrapper">
                    <img src="assets/img/popular/feature-1-1.jpg" alt="Image" />
                    <div class="popular-badge">
                      <img
                        src="assets/img/icon/sell_rent_icon.svg"
                        alt="icon"
                      />
                      <p>For Sale</p>
                    </div>
                  </div>
                  <div class="property-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        {" "}
                        <a href="property-details.html">Seaside Villa 5078</a>
                      </h3>
                      <div class="box-text">
                        <div class="icon">
                          <img
                            src="assets/img/icon/popular-location.svg"
                            alt="icon"
                          />
                        </div>{" "}
                        39581 Rohan Estates, New York
                      </div>
                    </div>

                    <ul class="property-featured">
                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/bed.svg" alt="icon" />
                        </div>
                        Bed 4
                      </li>

                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/bath.svg" alt="icon" />
                        </div>
                        Bath 2
                      </li>
                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/sqft.svg" alt="icon" />
                        </div>
                        1500 sqft
                      </li>
                    </ul>
                    <div class="property-bottom">
                      <h6 class="box-title">$179,800.00</h6>
                      <a
                        class="th-btn sm style3 pill"
                        href="property-details.html"
                      >
                        View More{" "}
                      </a>
                    </div>
                    <div class="agent-wrap">
                      <div class="agent-thumb">
                        <img
                          src="assets/img/popular/agent-thumb-1.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="agent-content">
                        <h4 class="box-title">Roberto Ankunding</h4>
                        <p class="box-text">Sale Agent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="popular-list-1 style-2">
                  <div class="thumb-wrapper">
                    <img src="assets/img/popular/feature-1-2.jpg" alt="Image" />
                    <div class="popular-badge">
                      <img
                        src="assets/img/icon/sell_rent_icon.svg"
                        alt="icon"
                      />
                      <p>For Sale</p>
                    </div>
                  </div>
                  <div class="property-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        {" "}
                        <a href="property-details.html">
                          Luxurious Modern Home
                        </a>
                      </h3>
                      <div class="box-text">
                        <div class="icon">
                          <img
                            src="assets/img/icon/popular-location.svg"
                            alt="icon"
                          />
                        </div>{" "}
                        39581 Rohan Estates, New York
                      </div>
                    </div>

                    <ul class="property-featured">
                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/bed.svg" alt="icon" />
                        </div>
                        Bed 4
                      </li>

                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/bath.svg" alt="icon" />
                        </div>
                        Bath 2
                      </li>
                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/sqft.svg" alt="icon" />
                        </div>
                        1500 sqft
                      </li>
                    </ul>
                    <div class="property-bottom">
                      <h6 class="box-title">$335,800.00</h6>
                      <a
                        class="th-btn sm style3 pill"
                        href="property-details.html"
                      >
                        View More{" "}
                      </a>
                    </div>
                    <div class="agent-wrap">
                      <div class="agent-thumb">
                        <img
                          src="assets/img/popular/agent-thumb-2.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="agent-content">
                        <h4 class="box-title">Walter Deckow</h4>
                        <p class="box-text">Sale Agent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="popular-list-1 style-2">
                  <div class="thumb-wrapper">
                    <img src="assets/img/popular/feature-1-1.jpg" alt="Image" />
                    <div class="popular-badge">
                      <img
                        src="assets/img/icon/sell_rent_icon.svg"
                        alt="icon"
                      />
                      <p>For Sale</p>
                    </div>
                  </div>
                  <div class="property-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        {" "}
                        <a href="property-details.html">Cozy Cottage</a>
                      </h3>
                      <div class="box-text">
                        <div class="icon">
                          <img
                            src="assets/img/icon/popular-location.svg"
                            alt="icon"
                          />
                        </div>{" "}
                        39581 Rohan Estates, New York
                      </div>
                    </div>

                    <ul class="property-featured">
                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/bed.svg" alt="icon" />
                        </div>
                        Bed 4
                      </li>

                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/bath.svg" alt="icon" />
                        </div>
                        Bath 2
                      </li>
                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/sqft.svg" alt="icon" />
                        </div>
                        1500 sqft
                      </li>
                    </ul>
                    <div class="property-bottom">
                      <h6 class="box-title">$250,800.00</h6>
                      <a
                        class="th-btn sm style3 pill"
                        href="property-details.html"
                      >
                        View More{" "}
                      </a>
                    </div>
                    <div class="agent-wrap">
                      <div class="agent-thumb">
                        <img
                          src="assets/img/popular/agent-thumb-1.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="agent-content">
                        <h4 class="box-title">Roberto Ankunding</h4>
                        <p class="box-text">Sale Agent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="popular-list-1 style-2">
                  <div class="thumb-wrapper">
                    <img src="assets/img/popular/feature-1-2.jpg" alt="Image" />
                    <div class="popular-badge">
                      <img
                        src="assets/img/icon/sell_rent_icon.svg"
                        alt="icon"
                      />
                      <p>For Sale</p>
                    </div>
                  </div>
                  <div class="property-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        {" "}
                        <a href="property-details.html">Modern Beach House</a>
                      </h3>
                      <div class="box-text">
                        <div class="icon">
                          <img
                            src="assets/img/icon/popular-location.svg"
                            alt="icon"
                          />
                        </div>{" "}
                        39581 Rohan Estates, New York
                      </div>
                    </div>

                    <ul class="property-featured">
                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/bed.svg" alt="icon" />
                        </div>
                        Bed 4
                      </li>

                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/bath.svg" alt="icon" />
                        </div>
                        Bath 2
                      </li>
                      <li>
                        <div class="icon">
                          <img src="assets/img/icon/sqft.svg" alt="icon" />
                        </div>
                        1500 sqft
                      </li>
                    </ul>
                    <div class="property-bottom">
                      <h6 class="box-title">$189,800.00</h6>
                      <a
                        class="th-btn sm style3 pill"
                        href="property-details.html"
                      >
                        View More{" "}
                      </a>
                    </div>
                    <div class="agent-wrap">
                      <div class="agent-thumb">
                        <img
                          src="assets/img/popular/agent-thumb-2.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="agent-content">
                        <h4 class="box-title">Walter Deckow</h4>
                        <p class="box-text">Sale Agent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            data-slider-prev="#featuresSlider"
            class="slider-arrow slider-prev"
          >
            <i class="far fa-arrow-left"></i>
          </button>
          <button
            data-slider-next="#featuresSlider"
            class="slider-arrow slider-next"
          >
            <i class="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesLarge;
