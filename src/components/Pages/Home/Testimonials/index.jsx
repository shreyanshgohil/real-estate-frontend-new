import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testi-card-area-2 space overflow-hidden">
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
                <span className="double-line"></span>Testimonials
              </p>
              <h2
                className="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                What Clients Say About Pillar
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="testi-card-slide">
            <div
              className="swiper has-shadow th-slider"
              id="testiSlide1"
              data-slider-options='{"centeredSlides":true,"paginationType": "progressbar","loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"1"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-block style-2" dir="ltr">
                    <div className="top-wrap">
                      <div className="quote">
                        <img src="/images/icons/testi-2quote.svg" alt="quote" />
                      </div>
                    </div>
                    <div className="testi-content pe-xl-5 px-xl-5">
                      <p className="box-text">
                        “Adinventitias sequi cerno cedo vapulus adhaero decretum
                        suppono iure voluptate. Trans triumphus toties sed
                        cogito carbo valetudo aequus ciminatio conventus.
                        Voluptates decimus vorago suadeo. Culpo carmen adnuo.
                        Verecundia capio denego. Tracto caterva cavus denique
                        culpa vigor tergum possimus. Aer arceo umerus asperiores
                        templum desidero caritas. Velum adipisci verumtamen
                        comparo ascisco ceno vitiosus aeneus tenetur bibo.”
                      </p>
                    </div>
                    <div className="bottom-wrap">
                      <div className="box-review">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div className="team-img">
                        <img src="/images/home/testi-2-1.jpg" alt="Team" />
                      </div>
                      <div className="content">
                        <h3 className="box-title">Georgia Schaden</h3>
                        <p className="text">Property owner</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-block style-2" dir="ltr">
                    <div className="top-wrap">
                      <div className="quote">
                        <img
                          src="assets/img/icon/testi-2quote.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-content pe-xl-5 px-xl-5">
                      <p className="box-text">
                        “Tenax comitatus ambulo regnum eligo, conturbo vis
                        caelum cohors. Infit ustulo adoptio collum, speciosus
                        lumen soluta. Condico spiculum ratio, sopor conventus
                        adversus fiducia. Arma arcesso altaria impleo pax
                        laboriosus. Tracto caterva cavus denique culpa vigor
                        tergum possimus. Aer arceo umerus asperiores templum
                        desidero caritas. Trepide asporto momentum, Tracto
                        caterva cavus denique culpa vigor. virgo sollemne aurora
                        amo”
                      </p>
                    </div>
                    <div className="bottom-wrap">
                      <div className="box-review">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div className="team-img">
                        <img
                          src="assets/img/testimonial/testi-2-2.jpg"
                          alt="Team"
                        />
                      </div>
                      <div className="content">
                        <h3 className="box-title">Walter Deckow</h3>
                        <p className="text">Property owner</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-block style-2" dir="ltr">
                    <div className="top-wrap">
                      <div className="quote">
                        <img
                          src="assets/img/icon/testi-2quote.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-content pe-xl-5 px-xl-5">
                      <p className="box-text">
                        “Contendo votum traho clamo statim suffragium numquam
                        teneo. Altus iudicium versor, perpetuus velum pax
                        vestigium carpo. Candidus firmamentum celo, voluptas
                        optio demitto sonitus. Obduro casus adinventio vestigium
                        amplitudo sumo.vestigium carpo. Candidus firmamentum
                        celo, voluptas Concido laboriosam varietas amplector,
                        aureus stella sursum approbo. Gravitas turbo decet, hhe
                        adulescens perpetuus auxilium comes virga.”
                      </p>
                    </div>
                    <div className="bottom-wrap">
                      <div className="box-review">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div className="team-img">
                        <img
                          src="assets/img/testimonial/testi-2-1.jpg"
                          alt="Team"
                        />
                      </div>
                      <div className="content">
                        <h3 className="box-title">Carlos Bauch</h3>
                        <p className="text">Property owner</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-block style-2" dir="ltr">
                    <div className="top-wrap">
                      <div className="quote">
                        <img
                          src="assets/img/icon/testi-2quote.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-content pe-xl-5 px-xl-5">
                      <p className="box-text">
                        “Tenax comitatus ambulo regnum eligo, conturbo vis
                        caelum cohors. Infit ustulo adoptio collum, speciosus
                        lumen soluta. Condico spiculum ratio, sopor conventus
                        adversus fiducia. Arma arcesso altaria impleo pax
                        laboriosus. Trepide asporto momentum, virgo sollemne
                        aurora amo. Cedo umquam cedo summisse damnum reiciendis
                        veritas flamma. Tempus appono validus translatio,
                        Exemplum adnuo sponte voluntas radius caecus exsisto.”
                      </p>
                    </div>
                    <div className="bottom-wrap">
                      <div className="box-review">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div className="team-img">
                        <img
                          src="assets/img/testimonial/testi-2-2.jpg"
                          alt="Team"
                        />
                      </div>
                      <div className="content">
                        <h3 className="box-title">Julia Era</h3>
                        <p className="text">Property owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-controller container-width">
                <button
                  data-slider-prev="#testiSlide1"
                  className="slider-arrow default  slider-prev"
                >
                  <i className="far fa-arrow-left"></i>
                </button>
                <div
                  className="slider-pagination style-2"
                  data-slider-id="#testiSlider1"
                ></div>
                <button
                  data-slider-next="#testiSlide1"
                  className="slider-arrow default  slider-next"
                >
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testi-bottom-review-wrap">
              <div className="testi-bottom-item">
                <div className="trust-content">
                  <div className="icon">
                    <img src="/images/icons/star-icon.svg" alt="img" />
                  </div>
                  <h4 className="box-title">Trustipilot</h4>
                </div>
                <div className="bottom">
                  <div className="avatar">
                    <img
                      src="/images/home/heror-1-avator-group.png"
                      alt="img"
                    />
                  </div>
                  <div className="content">
                    <div className="th-social">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h4 className="review-title">
                      <span className="number">
                        <span className="counter-number">19</span>k+
                      </span>{" "}
                      clients
                    </h4>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <div className="testi-bottom-item">
                <div className="trust-content">
                  <div className="icon">
                    <img src="/images/icons/google-icon.svg" alt="img" />
                  </div>
                  <h4 className="box-title">Google</h4>
                </div>
                <div className="bottom">
                  <div className="avatar">
                    <img
                      src="/images/home/heror-1-avator-group-2.png"
                      alt="img"
                    />
                  </div>
                  <div className="content">
                    <div className="th-social">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h4 className="review-title">
                      <span className="number">
                        <span className="counter-number">25</span>k+
                      </span>{" "}
                      clients
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
