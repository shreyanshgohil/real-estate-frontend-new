import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PillarAgents = () => {
  return (
    <section className="team-area-1 space-bottom overflow-hidden">
      <div
        className="shape-mockup jump d-none d-lg-block"
        data-top="6%"
        data-right="4%"
        style={{ top: "6%", right: "4%" }}
      >
        <img src="/images/shape/team-2-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center mt-1">
              <p
                className="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span>Team Members
              </p>
              <h2
                className="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Meet Our Pillar Agents
              </h2>
            </div>
          </div>
        </div>

        <div className="slider-area mb-20">
          <Swiper
            className="swiper th-slider has-shadow"
            id="teamSlider1"
            autoHeight={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide className="swiper-slide">
              <div
                className="team-card style-2"
                data-bg-src="/images/shape/team-2-bg-shape.png"
              >
                <div className="team-img">
                  <img src="/images/team/team_2_1.png" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="left-contet">
                    <h3 className="box-title">
                      <a href="team-details.html">Vickie Wisozk</a>
                    </h3>
                    <span className="team-desig">Real Estate Manager</span>
                  </div>
                  <div className="team-social">
                    <div className="th-social">
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                className="team-card style-2"
                data-bg-src="/images/shape/team-2-bg-shape.png"
              >
                <div className="team-img">
                  <img src="/images/team/team_2_2.png" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="left-contet">
                    <h3 className="box-title">
                      <a href="team-details.html">Renee Strosin</a>
                    </h3>
                    <span className="team-desig">Property Developer</span>
                  </div>
                  <div className="team-social">
                    <div className="th-social">
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                className="team-card style-2"
                data-bg-src="/images/shape/team-2-bg-shape.png"
              >
                <div className="team-img">
                  <img src="/images/team/team_2_3.png" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="left-contet">
                    <h3 className="box-title">
                      <a href="team-details.html">Zulia Era</a>
                    </h3>
                    <span className="team-desig">Listing Coordinator</span>
                  </div>
                  <div className="team-social">
                    <div className="th-social">
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="team-card style-2"
                data-bg-src="/images/shape/team-2-bg-shape.png"
              >
                <div className="team-img">
                  <img src="/images/team/team_2_3.png" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="left-contet">
                    <h3 className="box-title">
                      <a href="team-details.html">Zulia Era</a>
                    </h3>
                    <span className="team-desig">Listing Coordinator</span>
                  </div>
                  <div className="team-social">
                    <div className="th-social">
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="team-card style-2"
                data-bg-src="/images/shape/team-2-bg-shape.png"
              >
                <div className="team-img">
                  <img src="/images/team/team_2_3.png" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="left-contet">
                    <h3 className="box-title">
                      <a href="team-details.html">Zulia Era</a>
                    </h3>
                    <span className="team-desig">Listing Coordinator</span>
                  </div>
                  <div className="team-social">
                    <div className="th-social">
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="team-card style-2"
                data-bg-src="/images/shape/team-2-bg-shape.png"
              >
                <div className="team-img">
                  <img src="/images/team/team_2_3.png" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="left-contet">
                    <h3 className="box-title">
                      <a href="team-details.html">Zulia Era</a>
                    </h3>
                    <span className="team-desig">Listing Coordinator</span>
                  </div>
                  <div className="team-social">
                    <div className="th-social">
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="team-card style-2"
                data-bg-src="/images/shape/team-2-bg-shape.png"
              >
                <div className="team-img">
                  <img src="/images/team/team_2_3.png" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="left-contet">
                    <h3 className="box-title">
                      <a href="team-details.html">Zulia Era</a>
                    </h3>
                    <span className="team-desig">Listing Coordinator</span>
                  </div>
                  <div className="team-social">
                    <div className="th-social">
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="team-card style-2"
                data-bg-src="/images/shape/team-2-bg-shape.png"
              >
                <div className="team-img">
                  <img src="/images/team/team_2_3.png" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="left-contet">
                    <h3 className="box-title">
                      <a href="team-details.html">Zulia Era</a>
                    </h3>
                    <span className="team-desig">Listing Coordinator</span>
                  </div>
                  <div className="team-social">
                    <div className="th-social">
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button
            data-slider-prev="#teamSlider1"
            className="slider-arrow slider-prev"
          >
            <i className="far fa-arrow-left"></i>
          </button>
          <button
            data-slider-next="#teamSlider1"
            className="slider-arrow slider-next"
          >
            <i className="far fa-arrow-right"></i>
          </button>
        </div>

        <div className="row gy-40 justify-content-center">
          <div className="col-xl-8">
            <p className="chat-text-wrap text-center pe-xl-5 ps-xl-5 mb-0">
              Explore Property agents are here to help with all your buying,
              renting and selling goals. Find the home of your dreams with an
              expert you can trust.{" "}
              <a className="text-theme" href="contact.html">
                 Let’s chat
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarAgents;
