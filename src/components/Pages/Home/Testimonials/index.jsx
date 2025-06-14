import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section class="testi-card-area-2 space overflow-hidden">
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
                <span class="double-line"></span>Testimonials
              </p>
              <h2
                class="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                What Clients Say About Pillar
              </h2>
            </div>
          </div>
        </div>
        <div class="row gy-4 justify-content-center">
          <div class="testi-card-slide">
            <div
              class="swiper has-shadow th-slider"
              id="testiSlide1"
              data-slider-options='{"centeredSlides":true,"paginationType": "progressbar","loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"1"}}}'
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testi-block style-2" dir="ltr">
                    <div class="top-wrap">
                      <div class="quote">
                        <img src="/images/icons/testi-2quote.svg" alt="quote" />
                      </div>
                    </div>
                    <div class="testi-content pe-xl-5 px-xl-5">
                      <p class="box-text">
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
                    <div class="bottom-wrap">
                      <div class="box-review">
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div class="team-img">
                        <img src="/images/home/testi-2-1.jpg" alt="Team" />
                      </div>
                      <div class="content">
                        <h3 class="box-title">Georgia Schaden</h3>
                        <p class="text">Property owner</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-block style-2" dir="ltr">
                    <div class="top-wrap">
                      <div class="quote">
                        <img
                          src="assets/img/icon/testi-2quote.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div class="testi-content pe-xl-5 px-xl-5">
                      <p class="box-text">
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
                    <div class="bottom-wrap">
                      <div class="box-review">
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div class="team-img">
                        <img
                          src="assets/img/testimonial/testi-2-2.jpg"
                          alt="Team"
                        />
                      </div>
                      <div class="content">
                        <h3 class="box-title">Walter Deckow</h3>
                        <p class="text">Property owner</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-block style-2" dir="ltr">
                    <div class="top-wrap">
                      <div class="quote">
                        <img
                          src="assets/img/icon/testi-2quote.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div class="testi-content pe-xl-5 px-xl-5">
                      <p class="box-text">
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
                    <div class="bottom-wrap">
                      <div class="box-review">
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div class="team-img">
                        <img
                          src="assets/img/testimonial/testi-2-1.jpg"
                          alt="Team"
                        />
                      </div>
                      <div class="content">
                        <h3 class="box-title">Carlos Bauch</h3>
                        <p class="text">Property owner</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-block style-2" dir="ltr">
                    <div class="top-wrap">
                      <div class="quote">
                        <img
                          src="assets/img/icon/testi-2quote.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div class="testi-content pe-xl-5 px-xl-5">
                      <p class="box-text">
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
                    <div class="bottom-wrap">
                      <div class="box-review">
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div class="team-img">
                        <img
                          src="assets/img/testimonial/testi-2-2.jpg"
                          alt="Team"
                        />
                      </div>
                      <div class="content">
                        <h3 class="box-title">Julia Era</h3>
                        <p class="text">Property owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider-controller container-width">
                <button
                  data-slider-prev="#testiSlide1"
                  class="slider-arrow default  slider-prev"
                >
                  <i class="far fa-arrow-left"></i>
                </button>
                <div
                  class="slider-pagination style-2"
                  data-slider-id="#testiSlider1"
                ></div>
                <button
                  data-slider-next="#testiSlide1"
                  class="slider-arrow default  slider-next"
                >
                  <i class="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="testi-bottom-review-wrap">
              <div class="testi-bottom-item">
                <div class="trust-content">
                  <div class="icon">
                    <img src="/images/icons/star-icon.svg" alt="img" />
                  </div>
                  <h4 class="box-title">Trustipilot</h4>
                </div>
                <div class="bottom">
                  <div class="avatar">
                    <img
                      src="/images/home/heror-1-avator-group.png"
                      alt="img"
                    />
                  </div>
                  <div class="content">
                    <div class="th-social">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <h4 class="review-title">
                      <span class="number">
                        <span class="counter-number">19</span>k+
                      </span>{" "}
                      clients
                    </h4>
                  </div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="testi-bottom-item">
                <div class="trust-content">
                  <div class="icon">
                    <img src="/images/icons/google-icon.svg" alt="img" />
                  </div>
                  <h4 class="box-title">Google</h4>
                </div>
                <div class="bottom">
                  <div class="avatar">
                    <img
                      src="/images/home/heror-1-avator-group-2.png"
                      alt="img"
                    />
                  </div>
                  <div class="content">
                    <div class="th-social">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <h4 class="review-title">
                      <span class="number">
                        <span class="counter-number">25</span>k+
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
