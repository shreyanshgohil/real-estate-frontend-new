import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
const FeaturedPropertiesLarge = () => {
  return (
    <section className="popular-sec-1 space overflow-hidden bg-smoke">
      <div className="container">
        <div className="row justify-content-lg-between gy-4 justify-content-center align-items-center mb-40">
          <div className="col-lg-6">
            <div className="title-area text-left mb-2">
              <p
                className="sub-title feature-sec-v2"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span> Latest Properties
              </p>
              <h2
                className="sec-title feature-sec-v2"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Featured Properties
              </h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <a
              href="property.html"
              className="th-btn tab-btn style3 pill feature-sec-v2"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              Browse Now
            </a>
          </div>
        </div>
        <div className="slider-area">
          <Swiper
            className="swiper th-slider has-shadow"
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 1 },
              1200: { slidesPerView: 2 },
              1400: { slidesPerView: 2 },
            }}
            autoplay={{
              delay: 3000, // you can adjust this delay
              disableOnInteraction: false,
            }}
            autoHeight={true}
            spaceBetween={60}
            // modules={[Autoplay]}
          >
            <SwiperSlide className="swiper-slide">
              <div className="popular-list-1 style-2">
                <div className="thumb-wrapper">
                  <Image
                    src="/images/popular/feature-1-1.jpg"
                    width={524}
                    height={444}
                    style={{ minWidth: "524px", minHeight: "444px" }}
                    alt=""
                  />
                  <div className="popular-badge">
                    <Image
                      src="/images/icons/sell_rent_icon.svg"
                      alt=""
                      width={54}
                      height={30}
                    />
                    <p>For Sale</p>
                  </div>
                </div>
                <div className="property-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      {" "}
                      <a href="property-details.html">Seaside Villa 5078</a>
                    </h3>
                    <div className="box-text">
                      <div className="icon">
                        <Image
                          src="/images/icons/popular-location.svg"
                          height={16}
                          width={16}
                          alt="icon"
                        />
                      </div>{" "}
                      39581 Rohan Estates, New York
                    </div>
                  </div>

                  <ul className="property-featured">
                    <li>
                      <div className="icon">
                        <Image
                          src="/images/icons/bed.svg"
                          width={23}
                          height={26}
                          alt=""
                        />
                      </div>
                      Bed 4
                    </li>

                    <li>
                      <div className="icon">
                        <Image
                          src="/images/icons/bath.svg"
                          height={23}
                          width={23}
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
                          height={23}
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
                      View More{" "}
                    </a>
                  </div>
                  <div className="agent-wrap">
                    <div className="agent-thumb">
                      <Image
                        src="/images/popular/agent-thumb-1.jpg"
                        height={50}
                        width={50}
                        alt=""
                      />
                    </div>
                    <div className="agent-content">
                      <h4 className="box-title">Roberto Ankunding</h4>
                      <p className="box-text">Sale Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="popular-list-1 style-2">
                <div className="thumb-wrapper">
                  <Image
                    src="/images/popular/feature-1-2.jpg"
                    width={524}
                    height={444}
                    style={{ minWidth: "524px", minHeight: "444px" }}
                    alt=""
                  />
                  <div className="popular-badge">
                    <Image
                      src="/images/icons/sell_rent_icon.svg"
                      alt=""
                      width={54}
                      height={30}
                    />
                    <p>For Sale</p>
                  </div>
                </div>
                <div className="property-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      {" "}
                      <a href="property-details.html">Luxurious Modern Home</a>
                    </h3>
                    <div className="box-text">
                      <div className="icon">
                        <Image
                          src="/images/icons/popular-location.svg"
                          height={16}
                          width={16}
                          alt=""
                        />
                      </div>{" "}
                      39581 Rohan Estates, New York
                    </div>
                  </div>

                  <ul className="property-featured">
                    <li>
                      <div className="icon">
                        <Image
                          src="/images/icons/bed.svg"
                          width={23}
                          height={26}
                          alt=""
                        />
                      </div>
                      Bed 4
                    </li>

                    <li>
                      <div className="icon">
                        <Image
                          src="/images/icons/bath.svg"
                          height={23}
                          width={23}
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
                          height={23}
                          alt=""
                        />
                      </div>
                      1500 sqft
                    </li>
                  </ul>
                  <div className="property-bottom">
                    <h6 className="box-title">$335,800.00</h6>
                    <a
                      className="th-btn sm style3 pill"
                      href="property-details.html"
                    >
                      View More{" "}
                    </a>
                  </div>
                  <div className="agent-wrap">
                    <div className="agent-thumb">
                      <Image
                        src="/images/popular/agent-thumb-2.jpg"
                        height={50}
                        width={50}
                        alt=""
                      />
                    </div>
                    <div className="agent-content">
                      <h4 className="box-title">Walter Deckow</h4>
                      <p className="box-text">Sale Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="popular-list-1 style-2">
                <div className="thumb-wrapper">
                  <Image
                    src="/images/popular/feature-1-1.jpg"
                    width={524}
                    height={444}
                    alt=""
                    style={{ minWidth: "524px", minHeight: "444px" }}
                  />
                  <div className="popular-badge">
                    <Image
                      src="/images/icons/sell_rent_icon.svg"
                      alt=""
                      width={54}
                      height={30}
                    />
                    <p>For Sale</p>
                  </div>
                </div>
                <div className="property-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      {" "}
                      <a href="property-details.html">Cozy Cottage</a>
                    </h3>
                    <div className="box-text">
                      <div className="icon">
                        <Image
                          src="/images/icons/popular-location.svg"
                          height={16}
                          width={16}
                          alt=""
                        />
                      </div>{" "}
                      39581 Rohan Estates, New York
                    </div>
                  </div>

                  <ul className="property-featured">
                    <li>
                      <div className="icon">
                        <Image
                          src="/images/icons/bed.svg"
                          width={23}
                          height={26}
                          alt=""
                        />
                      </div>
                      Bed 4
                    </li>

                    <li>
                      <div className="icon">
                        <Image
                          src="/images/icons/bath.svg"
                          height={23}
                          width={23}
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
                          height={23}
                          alt=""
                        />
                      </div>
                      1500 sqft
                    </li>
                  </ul>
                  <div className="property-bottom">
                    <h6 className="box-title">$250,800.00</h6>
                    <a
                      className="th-btn sm style3 pill"
                      href="property-details.html"
                    >
                      View More{" "}
                    </a>
                  </div>
                  <div className="agent-wrap">
                    <div className="agent-thumb">
                      <Image
                        src="/images/popular/agent-thumb-1.jpg"
                        height={50}
                        width={50}
                        alt=""
                      />
                    </div>
                    <div className="agent-content">
                      <h4 className="box-title">Roberto Ankunding</h4>
                      <p className="box-text">Sale Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="popular-list-1 style-2">
                <div className="thumb-wrapper">
                  <Image
                    src="/images/popular/feature-1-2.jpg"
                    width={524}
                    height={444}
                    style={{ minWidth: "524px", minHeight: "444px" }}
                    alt=""
                  />
                  <div className="popular-badge">
                    <Image
                      src="/images/icons/sell_rent_icon.svg"
                      alt=""
                      width={54}
                      height={30}
                    />
                    <p>For Sale</p>
                  </div>
                </div>
                <div className="property-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      {" "}
                      <a href="property-details.html">Modern Beach House</a>
                    </h3>
                    <div className="box-text">
                      <div className="icon">
                        <Image
                          src="/images/icons/popular-location.svg"
                          height={16}
                          width={16}
                          alt=""
                        />
                      </div>{" "}
                      39581 Rohan Estates, New York
                    </div>
                  </div>

                  <ul className="property-featured">
                    <li>
                      <div className="icon">
                        <Image
                          src="/images/icons/bed.svg"
                          width={23}
                          height={26}
                          alt=""
                        />
                      </div>
                      Bed 4
                    </li>

                    <li>
                      <div className="icon">
                        <Image
                          src="/images/icons/bath.svg"
                          height={23}
                          width={23}
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
                          height={23}
                          alt=""
                        />
                      </div>
                      1500 sqft
                    </li>
                  </ul>
                  <div className="property-bottom">
                    <h6 className="box-title">$189,800.00</h6>
                    <a
                      className="th-btn sm style3 pill"
                      href="property-details.html"
                    >
                      View More{" "}
                    </a>
                  </div>
                  <div className="agent-wrap">
                    <div className="agent-thumb">
                      <Image
                        src="/images/popular/agent-thumb-2.jpg"
                        height={50}
                        width={50}
                        alt=""
                      />
                    </div>
                    <div className="agent-content">
                      <h4 className="box-title">Walter Deckow</h4>
                      <p className="box-text">Sale Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button
            data-slider-prev="#featuresSlider"
            className="slider-arrow slider-prev"
          >
            <i className="far fa-arrow-left"></i>
          </button>
          <button
            data-slider-next="#featuresSlider"
            className="slider-arrow slider-next"
          >
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesLarge;
