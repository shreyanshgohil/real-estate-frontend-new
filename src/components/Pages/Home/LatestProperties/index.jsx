import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
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
        <div className="row gy-30 justify-content-center filter-active">
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div className="popular-list-1">
              <div className="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>

                  <div className="icon-wrap">
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div className="actions">
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
                <div className="actions-style-2-wrapper">
                  <div className="actions style-2">
                    <a href="#" className="icon-btn">
                      <span className="action-text">Add To Favorite</span>
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      className="icon-btn popular-popup-image"
                    >
                      <span className="action-text">View all img</span>
                      <i className="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div className="popular-badge">
                  <Image
                    src="/images/icons/sell_rent_icon.svg"
                    width={54}
                    height={30}
                    alt=""
                  />
                  <p>For Sale</p>
                </div>
              </div>
              <div className="property-content">
                <div className="media-body">
                  <h3 className="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div className="box-text">
                    <div className="icon">
                      <Image
                        src="/images/icons/popular-location.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul className="property-featured">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bed.svg"
                        width={23}
                        height={16}
                        alt="icon"
                      />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bath.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/sqft.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div className="property-bottom">
                  <h6 className="box-title">$179,800.00</h6>
                  <a
                    className="th-btn sm style3 pill"
                    href="property-details.html"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div className="popular-list-1">
              <div className="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={238}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={238}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={238}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={238}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>

                  <div className="icon-wrap">
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div className="actions">
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
                <div className="actions-style-2-wrapper">
                  <div className="actions style-2">
                    <a href="#" className="icon-btn">
                      <span className="action-text">Add To Favorite</span>
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      className="icon-btn popular-popup-image"
                    >
                      <span className="action-text">View all img</span>
                      <i className="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div className="popular-badge">
                  <Image
                    src="/images/icons/sell_rent_icon.svg"
                    width={54}
                    height={30}
                    alt=""
                  />
                  <p>For Sale</p>
                </div>
              </div>
              <div className="property-content">
                <div className="media-body">
                  <h3 className="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div className="box-text">
                    <div className="icon">
                      <Image
                        src="/images/icons/popular-location.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul className="property-featured">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bed.svg"
                        width={23}
                        height={16}
                        alt="icon"
                      />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bath.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/sqft.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div className="property-bottom">
                  <h6 className="box-title">$179,800.00</h6>
                  <a
                    className="th-btn sm style3 pill"
                    href="property-details.html"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div className="popular-list-1">
              <div className="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>

                  <div className="icon-wrap">
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div className="actions">
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
                <div className="actions-style-2-wrapper">
                  <div className="actions style-2">
                    <a href="#" className="icon-btn">
                      <span className="action-text">Add To Favorite</span>
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      className="icon-btn popular-popup-image"
                    >
                      <span className="action-text">View all img</span>
                      <i className="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div className="popular-badge">
                  <Image
                    src="/images/icons/sell_rent_icon.svg"
                    width={54}
                    height={30}
                    alt=""
                  />
                  <p>For Sale</p>
                </div>
              </div>
              <div className="property-content">
                <div className="media-body">
                  <h3 className="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div className="box-text">
                    <div className="icon">
                      <Image
                        src="/images/icons/popular-location.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul className="property-featured">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bed.svg"
                        width={23}
                        height={16}
                        alt="icon"
                      />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bath.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/sqft.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div className="property-bottom">
                  <h6 className="box-title">$179,800.00</h6>
                  <a
                    className="th-btn sm style3 pill"
                    href="property-details.html"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div className="popular-list-1">
              <div className="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>

                  <div className="icon-wrap">
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div className="actions">
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
                <div className="actions-style-2-wrapper">
                  <div className="actions style-2">
                    <a href="#" className="icon-btn">
                      <span className="action-text">Add To Favorite</span>
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      className="icon-btn popular-popup-image"
                    >
                      <span className="action-text">View all img</span>
                      <i className="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div className="popular-badge">
                  <Image
                    src="/images/icons/sell_rent_icon.svg"
                    width={54}
                    height={30}
                    alt=""
                  />
                  <p>For Sale</p>
                </div>
              </div>
              <div className="property-content">
                <div className="media-body">
                  <h3 className="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div className="box-text">
                    <div className="icon">
                      <Image
                        src="/images/icons/popular-location.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul className="property-featured">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bed.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bath.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/sqft.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div className="property-bottom">
                  <h6 className="box-title">$179,800.00</h6>
                  <a
                    className="th-btn sm style3 pill"
                    href="property-details.html"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div className="popular-list-1">
              <div className="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>

                  <div className="icon-wrap">
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div className="actions">
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
                <div className="actions-style-2-wrapper">
                  <div className="actions style-2">
                    <a href="#" className="icon-btn">
                      <span className="action-text">Add To Favorite</span>
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      className="icon-btn popular-popup-image"
                    >
                      <span className="action-text">View all img</span>
                      <i className="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div className="popular-badge">
                  <Image
                    src="/images/icons/sell_rent_icon.svg"
                    width={54}
                    height={30}
                    alt=""
                  />
                  <p>For Sale</p>
                </div>
              </div>
              <div className="property-content">
                <div className="media-body">
                  <h3 className="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div className="box-text">
                    <div className="icon">
                      <Image
                        src="/images/icons/popular-location.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul className="property-featured">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bed.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bath.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/sqft.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div className="property-bottom">
                  <h6 className="box-title">$179,800.00</h6>
                  <a
                    className="th-btn sm style3 pill"
                    href="property-details.html"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div className="popular-list-1">
              <div className="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>

                  <div className="icon-wrap">
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div className="actions">
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
                <div className="actions-style-2-wrapper">
                  <div className="actions style-2">
                    <a href="#" className="icon-btn">
                      <span className="action-text">Add To Favorite</span>
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      className="icon-btn popular-popup-image"
                    >
                      <span className="action-text">View all img</span>
                      <i className="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div className="popular-badge">
                  <Image
                    src="/images/icons/sell_rent_icon.svg"
                    width={54}
                    height={30}
                    alt=""
                  />
                  <p>For Sale</p>
                </div>
              </div>
              <div className="property-content">
                <div className="media-body">
                  <h3 className="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div className="box-text">
                    <div className="icon">
                      <Image
                        src="/images/icons/popular-location.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul className="property-featured">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bed.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bath.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/sqft.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div className="property-bottom">
                  <h6 className="box-title">$179,800.00</h6>
                  <a
                    className="th-btn sm style3 pill"
                    href="property-details.html"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div className="popular-list-1">
              <div className="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>

                  <div className="icon-wrap">
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div className="actions">
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
                <div className="actions-style-2-wrapper">
                  <div className="actions style-2">
                    <a href="#" className="icon-btn">
                      <span className="action-text">Add To Favorite</span>
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      className="icon-btn popular-popup-image"
                    >
                      <span className="action-text">View all img</span>
                      <i className="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div className="popular-badge">
                  <Image
                    src="/images/icons/sell_rent_icon.svg"
                    width={54}
                    height={30}
                    alt=""
                  />
                  <p>For Sale</p>
                </div>
              </div>
              <div className="property-content">
                <div className="media-body">
                  <h3 className="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div className="box-text">
                    <div className="icon">
                      <Image
                        src="/images/icons/popular-location.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul className="property-featured">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bed.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bath.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/sqft.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div className="property-bottom">
                  <h6 className="box-title">$179,800.00</h6>
                  <a
                    className="th-btn sm style3 pill"
                    href="property-details.html"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 filter-item cat3 cat1">
            <div className="popular-list-1">
              <div className="thumb-wrapper">
                <Swiper
                  className="th-slider"
                  loop={false}
                  autoplay={false}
                  autoHeight={true}
                  effect="fade"
                  modules={[EffectFade]}
                >
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-1.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-1.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a
                      className="popular-popup-image"
                      href="/images/popular/popular-1-2.jpg"
                    >
                      <Image
                        src="/images/popular/popular-1-2.jpg"
                        width={340}
                        height={239}
                        alt=""
                      />
                    </a>
                  </SwiperSlide>

                  <div className="icon-wrap">
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
                <div className="actions">
                  <a href="wishlist.html" className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
                <div className="actions-style-2-wrapper">
                  <div className="actions style-2">
                    <a href="#" className="icon-btn">
                      <span className="action-text">Add To Favorite</span>
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                    <a
                      href="/images/popular/popular-1-1.jpg"
                      className="icon-btn popular-popup-image"
                    >
                      <span className="action-text">View all img</span>
                      <i className="fa-solid fa-camera"></i>
                    </a>
                  </div>
                </div>
                <div className="popular-badge">
                  <Image
                    src="/images/icons/sell_rent_icon.svg"
                    width={54}
                    height={30}
                    alt=""
                  />
                  <p>For Sale</p>
                </div>
              </div>
              <div className="property-content">
                <div className="media-body">
                  <h3 className="box-title">
                    <a href="property-details.html">Charming Beach House</a>
                  </h3>
                  <div className="box-text">
                    <div className="icon">
                      <Image
                        src="/images/icons/popular-location.svg"
                        height={16}
                        width={16}
                        alt=""
                      />
                    </div>
                    39581 Rohan Estates, New York
                  </div>
                </div>

                <ul className="property-featured">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bed.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bed 4
                  </li>

                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/bath.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    Bath 2
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/icons/sqft.svg"
                        width={23}
                        height={16}
                        alt=""
                      />
                    </div>
                    1500 sqft
                  </li>
                </ul>
                <div className="property-bottom">
                  <h6 className="box-title">$179,800.00</h6>
                  <a
                    className="th-btn sm style3 pill"
                    href="property-details.html"
                  >
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
