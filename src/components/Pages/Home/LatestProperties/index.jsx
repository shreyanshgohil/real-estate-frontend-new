import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
const LatestProperties = () => {
  return (
    <section className="popular-sec-1 space">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center mb-35">
          <div className="col-lg-6">
            <div className="title-area text-left mb-0">
              <p
                className="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span> Latest Properties
              </p>
              <h2
                className="sec-title mb-4 fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Featured Properties
              </h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div
              className="filter-menu style-2 indicator-active filter-menu-active mt-0 mb-0 fadeinup wow"
              data-wow-duration="1.3s"
              data-wow-delay="0.1s"
            >
              <button
                data-filter="*"
                className="th-btn tab-btn active"
                type="button"
              >
                View All
              </button>
              <button
                data-filter=".cat1"
                className="th-btn tab-btn"
                type="button"
              >
                Apartment
              </button>
              <button
                data-filter=".cat2"
                className="th-btn tab-btn"
                type="button"
              >
                Commercial
              </button>
              <button
                data-filter=".cat3"
                className="th-btn tab-btn"
                type="button"
              >
                Land or Plot
              </button>
              <button
                data-filter=".cat4"
                className="th-btn tab-btn"
                type="button"
              >
                Farm
              </button>
            </div>
          </div>
        </div>
        <div class="row gy-30 justify-content-center filter-active">
          <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div class="popular-list-1">
              <div class="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>

                  <div class="icon-wrap">
                    <button class="slider-arrow slider-prev">
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button class="slider-arrow slider-next">
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div class="actions">
                  <a href="wishlist.html" class="icon-btn">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="actions-style-2-wrapper">
                  <div class="actions style-2">
                    <a href="#" class="icon-btn">
                      <span class="action-text">Add To Favorite</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      class="icon-btn popular-popup-image"
                    >
                      <span class="action-text">View all img</span>
                      <i class="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div class="popular-badge">
                  <img src="/images/icons/sell_rent_icon.svg" alt="icon" />
                  <p>For Sale</p>
                </div>
              </div>
              <div class="property-content">
                <div class="media-body">
                  <h3 class="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div class="box-text">
                    <div class="icon">
                      <img
                        src="/images/icons/popular-location.svg"
                        alt="icon"
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul class="property-featured">
                  <li>
                    <div class="icon">
                      <img src="/images/icons/bed.svg" alt="icon" />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div class="icon">
                      <img src="/images/icons/bath.svg" alt="icon" />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div class="icon">
                      <img src="/images/icons/sqft.svg" alt="icon" />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div class="property-bottom">
                  <h6 class="box-title">$179,800.00</h6>
                  <a class="th-btn sm style3 pill" href="property-details.html">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div class="popular-list-1">
              <div class="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>

                  <div class="icon-wrap">
                    <button class="slider-arrow slider-prev">
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button class="slider-arrow slider-next">
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div class="actions">
                  <a href="wishlist.html" class="icon-btn">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="actions-style-2-wrapper">
                  <div class="actions style-2">
                    <a href="#" class="icon-btn">
                      <span class="action-text">Add To Favorite</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      class="icon-btn popular-popup-image"
                    >
                      <span class="action-text">View all img</span>
                      <i class="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div class="popular-badge">
                  <img src="/images/icons/sell_rent_icon.svg" alt="icon" />
                  <p>For Sale</p>
                </div>
              </div>
              <div class="property-content">
                <div class="media-body">
                  <h3 class="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div class="box-text">
                    <div class="icon">
                      <img
                        src="/images/icons/popular-location.svg"
                        alt="icon"
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul class="property-featured">
                  <li>
                    <div class="icon">
                      <img src="/images/icons/bed.svg" alt="icon" />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div class="icon">
                      <img src="/images/icons/bath.svg" alt="icon" />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div class="icon">
                      <img src="/images/icons/sqft.svg" alt="icon" />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div class="property-bottom">
                  <h6 class="box-title">$179,800.00</h6>
                  <a class="th-btn sm style3 pill" href="property-details.html">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div class="popular-list-1">
              <div class="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>

                  <div class="icon-wrap">
                    <button class="slider-arrow slider-prev">
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button class="slider-arrow slider-next">
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div class="actions">
                  <a href="wishlist.html" class="icon-btn">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="actions-style-2-wrapper">
                  <div class="actions style-2">
                    <a href="#" class="icon-btn">
                      <span class="action-text">Add To Favorite</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      class="icon-btn popular-popup-image"
                    >
                      <span class="action-text">View all img</span>
                      <i class="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div class="popular-badge">
                  <img src="/images/icons/sell_rent_icon.svg" alt="icon" />
                  <p>For Sale</p>
                </div>
              </div>
              <div class="property-content">
                <div class="media-body">
                  <h3 class="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div class="box-text">
                    <div class="icon">
                      <img
                        src="/images/icons/popular-location.svg"
                        alt="icon"
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul class="property-featured">
                  <li>
                    <div class="icon">
                      <img src="/images/icons/bed.svg" alt="icon" />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div class="icon">
                      <img src="/images/icons/bath.svg" alt="icon" />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div class="icon">
                      <img src="/images/icons/sqft.svg" alt="icon" />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div class="property-bottom">
                  <h6 class="box-title">$179,800.00</h6>
                  <a class="th-btn sm style3 pill" href="property-details.html">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div class="popular-list-1">
              <div class="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>

                  <div class="icon-wrap">
                    <button class="slider-arrow slider-prev">
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button class="slider-arrow slider-next">
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div class="actions">
                  <a href="wishlist.html" class="icon-btn">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="actions-style-2-wrapper">
                  <div class="actions style-2">
                    <a href="#" class="icon-btn">
                      <span class="action-text">Add To Favorite</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      class="icon-btn popular-popup-image"
                    >
                      <span class="action-text">View all img</span>
                      <i class="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div class="popular-badge">
                  <img src="/images/icons/sell_rent_icon.svg" alt="icon" />
                  <p>For Sale</p>
                </div>
              </div>
              <div class="property-content">
                <div class="media-body">
                  <h3 class="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div class="box-text">
                    <div class="icon">
                      <img
                        src="/images/icons/popular-location.svg"
                        alt="icon"
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul class="property-featured">
                  <li>
                    <div class="icon">
                      <img src="/images/icons/bed.svg" alt="icon" />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div class="icon">
                      <img src="/images/icons/bath.svg" alt="icon" />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div class="icon">
                      <img src="/images/icons/sqft.svg" alt="icon" />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div class="property-bottom">
                  <h6 class="box-title">$179,800.00</h6>
                  <a class="th-btn sm style3 pill" href="property-details.html">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div class="popular-list-1">
              <div class="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>

                  <div class="icon-wrap">
                    <button class="slider-arrow slider-prev">
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button class="slider-arrow slider-next">
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div class="actions">
                  <a href="wishlist.html" class="icon-btn">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="actions-style-2-wrapper">
                  <div class="actions style-2">
                    <a href="#" class="icon-btn">
                      <span class="action-text">Add To Favorite</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      class="icon-btn popular-popup-image"
                    >
                      <span class="action-text">View all img</span>
                      <i class="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div class="popular-badge">
                  <img src="/images/icons/sell_rent_icon.svg" alt="icon" />
                  <p>For Sale</p>
                </div>
              </div>
              <div class="property-content">
                <div class="media-body">
                  <h3 class="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div class="box-text">
                    <div class="icon">
                      <img
                        src="/images/icons/popular-location.svg"
                        alt="icon"
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul class="property-featured">
                  <li>
                    <div class="icon">
                      <img src="/images/icons/bed.svg" alt="icon" />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div class="icon">
                      <img src="/images/icons/bath.svg" alt="icon" />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div class="icon">
                      <img src="/images/icons/sqft.svg" alt="icon" />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div class="property-bottom">
                  <h6 class="box-title">$179,800.00</h6>
                  <a class="th-btn sm style3 pill" href="property-details.html">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div class="popular-list-1">
              <div class="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>

                  <div class="icon-wrap">
                    <button class="slider-arrow slider-prev">
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button class="slider-arrow slider-next">
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div class="actions">
                  <a href="wishlist.html" class="icon-btn">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="actions-style-2-wrapper">
                  <div class="actions style-2">
                    <a href="#" class="icon-btn">
                      <span class="action-text">Add To Favorite</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      class="icon-btn popular-popup-image"
                    >
                      <span class="action-text">View all img</span>
                      <i class="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div class="popular-badge">
                  <img src="/images/icons/sell_rent_icon.svg" alt="icon" />
                  <p>For Sale</p>
                </div>
              </div>
              <div class="property-content">
                <div class="media-body">
                  <h3 class="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div class="box-text">
                    <div class="icon">
                      <img
                        src="/images/icons/popular-location.svg"
                        alt="icon"
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul class="property-featured">
                  <li>
                    <div class="icon">
                      <img src="/images/icons/bed.svg" alt="icon" />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div class="icon">
                      <img src="/images/icons/bath.svg" alt="icon" />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div class="icon">
                      <img src="/images/icons/sqft.svg" alt="icon" />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div class="property-bottom">
                  <h6 class="box-title">$179,800.00</h6>
                  <a class="th-btn sm style3 pill" href="property-details.html">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div class="popular-list-1">
              <div class="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>

                  <div class="icon-wrap">
                    <button class="slider-arrow slider-prev">
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button class="slider-arrow slider-next">
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div class="actions">
                  <a href="wishlist.html" class="icon-btn">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="actions-style-2-wrapper">
                  <div class="actions style-2">
                    <a href="#" class="icon-btn">
                      <span class="action-text">Add To Favorite</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      class="icon-btn popular-popup-image"
                    >
                      <span class="action-text">View all img</span>
                      <i class="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div class="popular-badge">
                  <img src="/images/icons/sell_rent_icon.svg" alt="icon" />
                  <p>For Sale</p>
                </div>
              </div>
              <div class="property-content">
                <div class="media-body">
                  <h3 class="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div class="box-text">
                    <div class="icon">
                      <img
                        src="/images/icons/popular-location.svg"
                        alt="icon"
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul class="property-featured">
                  <li>
                    <div class="icon">
                      <img src="/images/icons/bed.svg" alt="icon" />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div class="icon">
                      <img src="/images/icons/bath.svg" alt="icon" />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div class="icon">
                      <img src="/images/icons/sqft.svg" alt="icon" />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div class="property-bottom">
                  <h6 class="box-title">$179,800.00</h6>
                  <a class="th-btn sm style3 pill" href="property-details.html">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div class="popular-list-1">
              <div class="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <img src="/images/popular/popular-1-1.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <a
                      class="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <img src="/images/popular/popular-1-2.jpg" alt="Image" />
                    </a>
                  </SwiperSlide>

                  <div class="icon-wrap">
                    <button class="slider-arrow slider-prev">
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button class="slider-arrow slider-next">
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div class="actions">
                  <a href="wishlist.html" class="icon-btn">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="actions-style-2-wrapper">
                  <div class="actions style-2">
                    <a href="#" class="icon-btn">
                      <span class="action-text">Add To Favorite</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      class="icon-btn popular-popup-image"
                    >
                      <span class="action-text">View all img</span>
                      <i class="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div class="popular-badge">
                  <img src="/images/icons/sell_rent_icon.svg" alt="icon" />
                  <p>For Sale</p>
                </div>
              </div>
              <div class="property-content">
                <div class="media-body">
                  <h3 class="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div class="box-text">
                    <div class="icon">
                      <img
                        src="/images/icons/popular-location.svg"
                        alt="icon"
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul class="property-featured">
                  <li>
                    <div class="icon">
                      <img src="/images/icons/bed.svg" alt="icon" />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div class="icon">
                      <img src="/images/icons/bath.svg" alt="icon" />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div class="icon">
                      <img src="/images/icons/sqft.svg" alt="icon" />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div class="property-bottom">
                  <h6 class="box-title">$179,800.00</h6>
                  <a class="th-btn sm style3 pill" href="property-details.html">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProperties;
