import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const PropertyType = () => {
  return (
    <section
      id="category-sec"
      class="category-sec-1 position-relative space bg-smoke"
    >
      <div
        class="shape-mockup moving d-none d-md-block"
        data-top="12%"
        data-left="7%"
      >
        <img src="assets/img/shape/category-1-left.png" alt="img" />
      </div>
      <div
        class="shape-mockup jump d-none d-md-block"
        data-top="14%"
        data-right="2%"
      >
        <img src="assets/img/shape/category-1-right.png" alt="img" />
      </div>
      <div class="container">
        <div class="title-area text-center mb-50">
          <h3
            class="sub-title fadeinup wow"
            data-wow-duration="1.5s"
            data-wow-delay="0.1s"
          >
            {" "}
            <span class="double-line"></span> CATEGORIES
          </h3>
          <h2
            class="sec-title fadeinup wow"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            Choose Your Property Type
          </h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider"
            id="categorySlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"400":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"5"}, "1300":{"slidesPerView":"6"}}}'
          >
            <div class="swiper-wrapper">
              <Swiper
                slidesPerView={6}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={24}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="category-card">
                      <div class="box-icon">
                        <img
                          src="/images/icons/category_card_1.svg"
                          alt="Image"
                        />
                      </div>
                      <h3 class="box-title">
                        <a href="property.html">Apartment</a>
                      </h3>
                      <p class="box-subtitle">12 Property</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="category-card">
                      <div class="box-icon">
                        <img
                          src="/images/icons/category_card_2.svg"
                          alt="Image"
                        />
                      </div>
                      <h3 class="box-title">
                        <a href="property.html">House</a>
                      </h3>
                      <p class="box-subtitle">10 Property</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="category-card">
                      <div class="box-icon">
                        <img
                          src="/images/icons/category_card_3.svg"
                          alt="Image"
                        />
                      </div>
                      <h3 class="box-title">
                        <a href="property.html">Land/Plot</a>
                      </h3>
                      <p class="box-subtitle">02 Property</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="category-card">
                      <div class="box-icon">
                        <img
                          src="/images/icons/category_card_4.svg"
                          alt="Image"
                        />
                      </div>
                      <h3 class="box-title">
                        <a href="property.html">Townhouse</a>
                      </h3>
                      <p class="box-subtitle">05 Property</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="category-card">
                      <div class="box-icon">
                        <img
                          src="/images/icons/category_card_5.svg"
                          alt="Image"
                        />
                      </div>
                      <h3 class="box-title">
                        <a href="property.html">Penthouse</a>
                      </h3>
                      <p class="box-subtitle">02 Property</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="category-card">
                      <div class="box-icon">
                        <img
                          src="/images/icons/category_card_6.svg"
                          alt="Image"
                        />
                      </div>
                      <h3 class="box-title">
                        <a href="property.html">Cottage</a>
                      </h3>
                      <p class="box-subtitle">11 Property</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="category-card">
                      <div class="box-icon">
                        <img
                          src="/images/icons/category_card_1.svg"
                          alt="Image"
                        />
                      </div>
                      <h3 class="box-title">
                        <a href="property.html">Kawasaki</a>
                      </h3>
                      <p class="box-subtitle">14 Property</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyType;
