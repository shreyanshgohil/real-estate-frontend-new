import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ExploreCities = () => {
  return (
    <div className="gallery-sec-2 overflow-hidden bg-smoke space overflow-hidden">
      <div
        className="shape-mockup moving d-none d-md-block"
        data-top="12%"
        data-left="7%"
      >
        <img src="/images/home/gallery-sec-1-left.png" alt="img" />
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
                <span className="double-line"></span>Explore Cities
              </p>
              <h2
                className="sec-title mb-2 fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Explore The Neighborhoods
              </h2>
              <p
                className="box-text fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                Find your dream apartment with our listing
              </p>
            </div>
          </div>
        </div>
        <div className="gallery-2-slider-wrap">
          <div className="slider-area">
            <Swiper
              className="swiper th-slider has-shadow gallery-1"
              centeredSlides={false}
              loop={true}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 4 },
              }}
            >
              <SwiperSlide className="swiper-slide">
                <div className="gallery-card style-2">
                  <div className="gallery-img">
                    <img
                      src="/images/gallery/gallery-2-1.jpg"
                      alt="gallery image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-content-wrapper">
                        <div className="left-content">
                          <p className="box-text">250 Properties</p>
                          <h2 className="box-title">
                            <a href="property-details.html">
                              London, United Kngdom
                            </a>
                          </h2>
                        </div>
                        <div className="link">
                          <a href="property-details.html">
                            <i className="far fa-arrow-right"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="gallery-card style-2">
                  <div className="gallery-img">
                    <img
                      src="/images/gallery/gallery-2-2.jpg"
                      alt="gallery image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-content-wrapper">
                        <div className="left-content">
                          <p className="box-text">135 Properties</p>
                          <h2 className="box-title">
                            <a href="property-details.html">
                              New Jersey, New York
                            </a>
                          </h2>
                        </div>
                        <div className="link">
                          <a href="property-details.html">
                            <i className="far fa-arrow-right"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="gallery-card style-2">
                  <div className="gallery-img">
                    <img
                      src="/images/gallery/gallery-2-3.jpg"
                      alt="gallery image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-content-wrapper">
                        <div className="left-content">
                          <p className="box-text">225 Properties</p>
                          <h2 className="box-title">
                            <a href="property-details.html">
                              Cape Town, South Africa
                            </a>
                          </h2>
                        </div>
                        <div className="link">
                          <a href="property-details.html">
                            <i className="far fa-arrow-right"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="gallery-card style-2">
                  <div className="gallery-img">
                    <img
                      src="/images/gallery/gallery-2-4.jpg"
                      alt="gallery image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-content-wrapper">
                        <div className="left-content">
                          <p className="box-text">143 Properties</p>
                          <h2 className="box-title">
                            <a href="property-details.html">
                              Los Angeles, New York
                            </a>
                          </h2>
                        </div>
                        <div className="link">
                          <a href="property-details.html">
                            <i className="far fa-arrow-right"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="gallery-card style-2">
                  <div className="gallery-img">
                    <img
                      src="/images/gallery/gallery-2-5.jpg"
                      alt="gallery image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-content-wrapper">
                        <div className="left-content">
                          <p className="box-text">321 Properties</p>
                          <h2 className="box-title">
                            <a href="property-details.html">
                              Seoul, South Korea
                            </a>
                          </h2>
                        </div>
                        <div className="link">
                          <a href="property-details.html">
                            <i className="far fa-arrow-right"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="gallery-card style-2">
                  <div className="gallery-img">
                    <img
                      src="/images/gallery/gallery-2-6.jpg"
                      alt="gallery image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-content-wrapper">
                        <div className="left-content">
                          <p className="box-text">212 Properties</p>
                          <h2 className="box-title">
                            <a href="property-details.html">
                              Seoul, South Korea
                            </a>
                          </h2>
                        </div>
                        <div className="link">
                          <a href="property-details.html">
                            <i className="far fa-arrow-right"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="gallery-card style-2">
                  <div className="gallery-img">
                    <img
                      src="/images/gallery/gallery-2-7.jpg"
                      alt="gallery image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-content-wrapper">
                        <div className="left-content">
                          <p className="box-text">432 Properties</p>
                          <h2 className="box-title">
                            <a href="property-details.html">
                              London, United Kngdom
                            </a>
                          </h2>
                        </div>
                        <div className="link">
                          <a href="property-details.html">
                            <i className="far fa-arrow-right"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="gallery-card style-2">
                  <div className="gallery-img">
                    <img
                      src="/images/gallery/gallery-2-8.jpg"
                      alt="gallery image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-content-wrapper">
                        <div className="left-content">
                          <p className="box-text">211 Properties</p>
                          <h2 className="box-title">
                            <a href="property-details.html">
                              New Jersey, New York
                            </a>
                          </h2>
                        </div>
                        <div className="link">
                          <a href="property-details.html">
                            <i className="far fa-arrow-right"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <button
                data-slider-prev="#gallerySlider1"
                className="slider-arrow slider-prev style2"
              >
                <i className="far fa-arrow-left"></i>
              </button>
              <button
                data-slider-next="#gallerySlider1"
                className="slider-arrow slider-next style2"
              >
                <i className="far fa-arrow-right"></i>
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCities;
