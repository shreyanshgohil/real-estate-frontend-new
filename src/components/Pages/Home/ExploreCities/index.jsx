import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ExploreCities = () => {
  return (
    <div class="gallery-sec-2 overflow-hidden bg-smoke space overflow-hidden">
      <div
        class="shape-mockup moving d-none d-md-block"
        style={{ top: "12%", left: "7%" }}
      >
        <img src="assets/img/shape/gallery-sec-1-left.png" alt="img" />
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
                <span class="double-line"></span>Explore Cities
              </p>
              <h2
                class="sec-title mb-2 fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Explore The Neighborhoods
              </h2>
              <p
                class="box-text fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                Find your dream apartment with our listing
              </p>
            </div>
          </div>
        </div>
        <div class="gallery-2-slider-wrap">
          <div class="slider-area">
            <div
              class="swiper th-slider has-shadow gallery-1"
              id="gallerySlider1"
              data-slider-options='{"centeredSlides":false,"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="gallery-card style-2">
                    <div class="gallery-img">
                      <img
                        src="assets/img/gallery/gallery-2-1.jpg"
                        alt="gallery image"
                      />
                      <div class="gallery-content">
                        <div class="gallery-content-wrapper">
                          <div class="left-content">
                            <p class="box-text">250 Properties</p>
                            <h2 class="box-title">
                              <a href="property-details.html">
                                London, United Kngdom
                              </a>
                            </h2>
                          </div>
                          <div class="link">
                            <a href="property-details.html">
                              <i class="far fa-arrow-right"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="gallery-card style-2">
                    <div class="gallery-img">
                      <img
                        src="assets/img/gallery/gallery-2-2.jpg"
                        alt="gallery image"
                      />
                      <div class="gallery-content">
                        <div class="gallery-content-wrapper">
                          <div class="left-content">
                            <p class="box-text">135 Properties</p>
                            <h2 class="box-title">
                              <a href="property-details.html">
                                New Jersey, New York
                              </a>
                            </h2>
                          </div>
                          <div class="link">
                            <a href="property-details.html">
                              <i class="far fa-arrow-right"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="gallery-card style-2">
                    <div class="gallery-img">
                      <img
                        src="assets/img/gallery/gallery-2-3.jpg"
                        alt="gallery image"
                      />
                      <div class="gallery-content">
                        <div class="gallery-content-wrapper">
                          <div class="left-content">
                            <p class="box-text">225 Properties</p>
                            <h2 class="box-title">
                              <a href="property-details.html">
                                Cape Town, South Africa
                              </a>
                            </h2>
                          </div>
                          <div class="link">
                            <a href="property-details.html">
                              <i class="far fa-arrow-right"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="gallery-card style-2">
                    <div class="gallery-img">
                      <img
                        src="assets/img/gallery/gallery-2-4.jpg"
                        alt="gallery image"
                      />
                      <div class="gallery-content">
                        <div class="gallery-content-wrapper">
                          <div class="left-content">
                            <p class="box-text">143 Properties</p>
                            <h2 class="box-title">
                              <a href="property-details.html">
                                Los Angeles, New York
                              </a>
                            </h2>
                          </div>
                          <div class="link">
                            <a href="property-details.html">
                              <i class="far fa-arrow-right"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="gallery-card style-2">
                    <div class="gallery-img">
                      <img
                        src="assets/img/gallery/gallery-2-5.jpg"
                        alt="gallery image"
                      />
                      <div class="gallery-content">
                        <div class="gallery-content-wrapper">
                          <div class="left-content">
                            <p class="box-text">321 Properties</p>
                            <h2 class="box-title">
                              <a href="property-details.html">
                                Seoul, South Korea
                              </a>
                            </h2>
                          </div>
                          <div class="link">
                            <a href="property-details.html">
                              <i class="far fa-arrow-right"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="gallery-card style-2">
                    <div class="gallery-img">
                      <img
                        src="assets/img/gallery/gallery-2-6.jpg"
                        alt="gallery image"
                      />
                      <div class="gallery-content">
                        <div class="gallery-content-wrapper">
                          <div class="left-content">
                            <p class="box-text">212 Properties</p>
                            <h2 class="box-title">
                              <a href="property-details.html">
                                Seoul, South Korea
                              </a>
                            </h2>
                          </div>
                          <div class="link">
                            <a href="property-details.html">
                              <i class="far fa-arrow-right"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="gallery-card style-2">
                    <div class="gallery-img">
                      <img
                        src="assets/img/gallery/gallery-2-7.jpg"
                        alt="gallery image"
                      />
                      <div class="gallery-content">
                        <div class="gallery-content-wrapper">
                          <div class="left-content">
                            <p class="box-text">432 Properties</p>
                            <h2 class="box-title">
                              <a href="property-details.html">
                                London, United Kngdom
                              </a>
                            </h2>
                          </div>
                          <div class="link">
                            <a href="property-details.html">
                              <i class="far fa-arrow-right"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="gallery-card style-2">
                    <div class="gallery-img">
                      <img
                        src="assets/img/gallery/gallery-2-8.jpg"
                        alt="gallery image"
                      />
                      <div class="gallery-content">
                        <div class="gallery-content-wrapper">
                          <div class="left-content">
                            <p class="box-text">211 Properties</p>
                            <h2 class="box-title">
                              <a href="property-details.html">
                                New Jersey, New York
                              </a>
                            </h2>
                          </div>
                          <div class="link">
                            <a href="property-details.html">
                              <i class="far fa-arrow-right"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-slider-prev="#gallerySlider1"
                class="slider-arrow slider-prev style2"
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                data-slider-next="#gallerySlider1"
                class="slider-arrow slider-next style2"
              >
                <i class="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCities;
