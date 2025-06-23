import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
const LatestNews = () => {
  return (
    <section className="space overflow-hidden" id="blog-sec">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-lg-6">
            <div className="title-area text-left text-lg-start">
              <p
                className="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span>latest News
              </p>
              <h2
                className="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Latest news & articles
              </h2>
              <p
                className="sec-text pe-xl-4 fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                Car dealerships typically feature showrooms where the latest
                models are displayed in a well-lit, aesthetically pleasing
                environment.
              </p>
            </div>
          </div>
          <div className="col-lg-auto d-none d-lg-block">
            <div className="sec-btn">
              <a href="blog.html" className="th-btn pill style3">
                Explore All <i className="fas fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            spaceBetween={24}
            modules={[Autoplay]}
            id="blogSlider1"
            breakpoints={{
              992: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <Image
                      src="/images/home/blog_1_3.jpg"
                      width={464}
                      height={392}
                      alt=""
                    />
                  </a>
                  <div className="date">
                    <a href="blog.html">22 Feb</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fa-solid fa-user"></i> Emma
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-comments"></i> No Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Building gains into housing stocks and how to trade the
                      sector
                    </a>
                  </h3>
                  <a href="blog-details.html" className="th-btn pill style3">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <Image
                      src="/images/home/blog_1_3.jpg"
                      width={464}
                      height={392}
                      alt=""
                    />
                  </a>
                  <div className="date">
                    <a href="blog.html">23 Feb</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fa-solid fa-user"></i> Michel
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-comments"></i> 2 Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      92% of millennial homebuyers say has impacted their plans
                    </a>
                  </h3>
                  <a href="blog-details.html" className="th-btn pill style3">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <Image
                      src="/images/home/blog_1_3.jpg"
                      width={464}
                      height={392}
                      alt=""
                    />
                  </a>
                  <div className="date">
                    <a href="blog.html">24 Feb</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fa-solid fa-user"></i> Oliver
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-comments"></i> No Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Exploring the impact of climate change on global markets
                    </a>
                  </h3>
                  <a href="blog-details.html" className="th-btn pill style3">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <Image
                      src="/images/home/blog_1_3.jpg"
                      width={464}
                      height={392}
                      alt=""
                    />
                  </a>
                  <div className="date">
                    <a href="blog.html">26 Feb</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fa-solid fa-user"></i> Elena
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-comments"></i> 5 Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      The future of city living and its influence on of the in
                      design
                    </a>
                  </h3>
                  <a href="blog-details.html" className="th-btn pill style3">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <Image
                      src="/images/home/blog_1_3.jpg"
                      width={464}
                      height={392}
                      alt=""
                    />
                  </a>
                  <div className="date">
                    <a href="blog.html">27 Feb</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fa-solid fa-user"></i> Sam
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-comments"></i> No Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Exploring innovative architecture trends and their impact
                    </a>
                  </h3>
                  <a href="blog-details.html" className="th-btn pill style3">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <Image
                      src="/images/home/blog_1_3.jpg"
                      width={464}
                      height={392}
                      alt=""
                    />
                  </a>
                  <div className="date">
                    <a href="blog.html">16 Mar</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fa-solid fa-user"></i> David
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-comments"></i> 8 Comments
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Breaking down latest tech trends and investment
                      opportunity
                    </a>
                  </h3>
                  <a href="blog-details.html" className="th-btn pill style3">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button
            data-slider-prev="#blogSlider1"
            className="slider-arrow slider-prev"
          >
            <i className="far fa-arrow-left"></i>
          </button>
          <button
            data-slider-next="#blogSlider1"
            className="slider-arrow slider-next"
          >
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
