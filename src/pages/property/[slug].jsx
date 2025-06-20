import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { animationMoving } from "@/utils/animation";

const PropertyDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    animationMoving();
  }, []);
  const breadCumData = {
    title: "Property Details",
    page: " Property Details",
    baseUrl: "/",
    base: "Home",
  };

  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <section className="property-details space overflow-hidden">
        <div className="container">
          <div className="row gy-40 gx-50">
            <div className="col-xxl-8 col-lg-7">
              <div className="row gy-30">
                <div className="slider-area property-slider1">
                  <Swiper
                    className="swiper th-slider panoramaSlide2 mb-4"
                    modules={[EffectFade, Thumbs]}
                    effect="fade"
                    loop={true}
                    autoplay={false}
                    simulateTouch={false}
                    thumbs={{ swiper: thumbsSwiper }}
                  >
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="property-slider-img propery-single-slide"
                        id="panorama1"
                      >
                        <img
                          src="/images/explore-cites/explore-cites-bg-1.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="property-slider-img propery-single-slide"
                        id="panorama2"
                      >
                        <img
                          src="/images/explore-cites/explore-cites-bg-2.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="property-slider-img propery-single-slide"
                        id="panorama3"
                      >
                        <img
                          src="/images/explore-cites/explore-cites-bg-3.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="property-slider-img propery-single-slide"
                        id="panorama4"
                      >
                        <img
                          src="/images/explore-cites/explore-cites-bg-4.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="property-slider-img propery-single-slide"
                        id="panorama5"
                      >
                        <img
                          src="/images/explore-cites/explore-cites-bg-5.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    className="swiper th-slider property-thumb-slider slider-tab"
                    loop={true}
                    simulateTouch={true}
                    effect="slide"
                    spaceBetween={24}
                    breakpoints={{
                      0: { slidesPerView: 2 },
                      576: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      992: { slidesPerView: 3 },
                      1200: { slidesPerView: 4 },
                    }}
                  >
                    <SwiperSlide className="swiper-slide" data-bg-src="">
                      <div className="tab-btn property-slider-img">
                        <img
                          src="/images/explore-cites/explore-cites-bg-1.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" data-bg-src="">
                      <div className="tab-btn property-slider-img">
                        <img
                          src="/images/explore-cites/explore-cites-bg-2.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" data-bg-src="">
                      <div className="tab-btn property-slider-img">
                        <img
                          src="/images/explore-cites/explore-cites-bg-3.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" data-bg-src="">
                      <div className="tab-btn property-slider-img">
                        <img
                          src="/images/explore-cites/explore-cites-bg-4.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" data-bg-src="">
                      <div className="tab-btn property-slider-img">
                        <img
                          src="/images/explore-cites/explore-cites-bg-5.jpg"
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <button
                    data-slider-prev="#panoramaSlide2"
                    className="slider-arrow slider-prev"
                  >
                    <i className="far fa-arrow-left"></i>
                  </button>
                  <button
                    data-slider-next="#panoramaSlide2"
                    className="slider-arrow slider-next"
                  >
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
                <div className="property-page-single">
                  <div className="page-content">
                    <div className="property-meta-wrap mb-55 fadeinup wow">
                      <div className="property-meta">
                        <a className="property-tag" href="blog.html">
                          Featured
                        </a>
                        <a href="blog.html">
                          <i className="fa-solid fa-calendar-days"></i> 05 Jun,
                          2024
                        </a>
                        <a href="blog.html">
                          <i className="fa-solid fa-comments"></i> No Comments
                        </a>
                      </div>
                      <div className="wishlist-icon">
                        <a href="wishlist.html" className="icon-btn">
                          <i className="fa-solid fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="page-title-wrap fadeinup wow">
                      <h2 className="page-title mb-2">About This Property</h2>
                      <h4 className="page-title">$5,805,00</h4>
                    </div>
                    <div className="page-features fadeinup wow">
                      <div className="box-text">
                        <div className="icon">
                          <img
                            src="/images/icons/popular-location.svg"
                            alt="icon"
                          />
                        </div>{" "}
                        39581 Rohan Estates, New York
                      </div>
                      <ul className="property-featured">
                        <li>
                          <div className="icon">
                            <img src="/images/icons/bed.svg" alt="icon" />
                          </div>
                          Bed 4
                        </li>

                        <li>
                          <div className="icon">
                            <img src="/images/icons/bath.svg" alt="icon" />
                          </div>
                          Bath 2
                        </li>
                        <li>
                          <div className="icon">
                            <img src="/images/icons/sqft.svg" alt="icon" />
                          </div>
                          1500 sqft
                        </li>
                      </ul>
                    </div>
                    <p className="mb-30 fadeinup wow">
                      This meticulously remodeled "Savant Smart Home" is a true
                      gem. Featuring four bedrooms and three bathrooms,
                      including a master with a jacuzzi tub, walk-in shower, and
                      steam room, it combines style with cutting-edge
                      technology. The open living and dining areas lead to a
                      chef's kitchen equipped with Thermador appliances,
                      including a gas range/oven. A custom bar with sleek
                      cabinetry, a dual Kegerator nitro brew system, and a
                      128-bottle, 3-zone wine fridge add to the home's allure.
                      High-end lighting and automation bring sophistication and
                      comfort throughout. Outdoors, enjoy a heated saltwater
                      pool with spa, a cabana bath, and an outdoor kitchen/bar
                      pergola. The fully-fenced front yard also features a
                      putting green.
                    </p>
                    <p className="mb-40 fadeinup wow">
                      {" "}
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur
                    </p>

                    <div className="hightlighes-title-wrap mb-25 fadeinup wow">
                      <h2 className="page-title mb-2">Property Hightlights</h2>
                      <h5 className="house-sell"> House for sale </h5>
                    </div>

                    <ul className="property-grid-list fadeinup wow">
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-1.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">ID NO.</h4>
                          <p className="property-grid-list-text">#1234</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-2.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Type</h4>
                          <p className="property-grid-list-text">Residencial</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-3.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Room</h4>
                          <p className="property-grid-list-text">6</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-4.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Bedroom</h4>
                          <p className="property-grid-list-text">4</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-5.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Bath</h4>
                          <p className="property-grid-list-text">2</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-6.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Big Yard</h4>
                          <p className="property-grid-list-text">1</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-7.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Purpose</h4>
                          <p className="property-grid-list-text">For Rent</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-8.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Sqft</h4>
                          <p className="property-grid-list-text">4000</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-9.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Parking</h4>
                          <p className="property-grid-list-text">Yes</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-10.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Elevator</h4>
                          <p className="property-grid-list-text">Yes</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-11.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Wifi</h4>
                          <p className="property-grid-list-text">Yes</p>
                        </div>
                      </li>
                      <li>
                        <div className="property-grid-list-icon">
                          <img
                            src="/images/icons/property-single-icon1-12.svg"
                            alt="img"
                          />
                        </div>
                        <div className="property-grid-list-details">
                          <h4 className="property-grid-list-title">Built in</h4>
                          <p className="property-grid-list-text">1985</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="page-title mt-50 mb-30 fadeinup wow">
                      From Amazing Gallery
                    </h3>
                    <div className="row gy-4 fadeinup wow">
                      <div className="col-xl-7">
                        <div className="property-gallery-card">
                          <div className="property-gallery-card-img">
                            <img
                              className="w-100"
                              src="/images/property-details/property-details_gal_1.jpg"
                              alt="img"
                            />
                          </div>
                          <a
                            className="icon-btn popup-image"
                            href="/images/property-details/property-details_gal_1.jpg"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="property-gallery-card">
                          <div className="property-gallery-card-img">
                            <img
                              className="w-100"
                              src="/images/property-details/property-details_gal_2.jpg"
                              alt="img"
                            />
                          </div>
                          <a
                            className="icon-btn popup-image"
                            href="/images/property-details/property-details_gal_2.jpg"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="property-gallery-card">
                          <div className="property-gallery-card-img">
                            <img
                              className="w-100"
                              src="/images/property-details/property-details_gal_3.jpg"
                              alt="img"
                            />
                          </div>
                          <a
                            className="icon-btn popup-image"
                            href="/images/property-details/property-details_gal_3.jpg"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="property-gallery-card">
                          <div className="property-gallery-card-img">
                            <img
                              className="w-100"
                              src="/images/property-details/property-details_gal_4.jpg"
                              alt="img"
                            />
                          </div>
                          <a
                            className="icon-btn popup-image"
                            href="/images/property-details/property-details_gal_4.jpg"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="property-gallery-card">
                          <div className="property-gallery-card-img">
                            <img
                              className="w-100"
                              src="/images/property-details/property-details_gal_5.jpg"
                              alt="img"
                            />
                          </div>
                          <a
                            className="icon-btn popup-image"
                            href="/images/property-details/property-details_gal_5.jpg"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="property-gallery-card">
                          <div className="property-gallery-card-img">
                            <img
                              className="w-100"
                              src="/images/property-details/property-details_gal_6.jpg"
                              alt="img"
                            />
                          </div>
                          <a
                            className="icon-btn popup-image"
                            href="/images/property-details/property-details_gal_6.jpg"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <h3 className="page-title mt-50 mb-25 fadeinup wow">
                      Features & amenities
                    </h3>

                    <div className="fea-anim-checklist fadeinup wow">
                      <div className="checklist style2 list-six-column">
                        <ul>
                          <li>Airconditioning</li>
                          <li>Barbeque</li>
                          <li>24x7 Seccurity</li>
                          <li>Jaguzzi</li>
                          <li>Gym</li>
                          <li>Home Theater</li>
                          <li>Balcony</li>
                          <li>Recreation</li>
                          <li>Indoor Game</li>
                          <li>Modern Kitchen</li>
                          <li>Walk-in Closet</li>
                          <li>Wine Cellar</li>
                          <li>Garage</li>
                          <li>Microwave</li>
                          <li>Pool</li>
                          <li>Refrigerator</li>
                          <li>Yard</li>
                          <li>Skylight</li>
                          <li>Landscaping</li>
                          <li>Basketball</li>
                          <li>Tanis Courts</li>
                          <li>Window Covert</li>
                          <li>Smart Home Te</li>
                          <li>Sauna</li>
                          <li>Outdoor Kitchen</li>
                          <li>Fireplace</li>
                          <li>Indoor</li>
                          <li>Washer</li>
                          <li>Security</li>
                          <li>Patio</li>
                        </ul>
                      </div>
                    </div>

                    <div className="row gy-30 align-items-center justify-content-center justify-content-between fadeinup wow mb-40 mt-40">
                      <div className="col-lg-auto">
                        <h3 className="page-title mb-0">Floor Plan</h3>
                      </div>
                      <div className="col-lg-auto">
                        <ul
                          className="nav nav-tabs property-tab mb-0"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="floor-tab1"
                              data-bs-toggle="tab"
                              data-bs-target="#floor-tab1-pane"
                              type="button"
                              role="tab"
                              aria-controls="floor-tab1-pane"
                              aria-selected="true"
                            >
                              First Floor
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="floor-tab2"
                              data-bs-toggle="tab"
                              data-bs-target="#floor-tab2-pane"
                              type="button"
                              role="tab"
                              aria-controls="floor-tab2-pane"
                              aria-selected="false"
                            >
                              Second Floor
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="floor-tab3"
                              data-bs-toggle="tab"
                              data-bs-target="#floor-tab3-pane"
                              type="button"
                              role="tab"
                              aria-controls="floor-tab3-pane"
                              aria-selected="false"
                            >
                              Third Floor
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="floor-tab4"
                              data-bs-toggle="tab"
                              data-bs-target="#floor-tab4-pane"
                              type="button"
                              role="tab"
                              aria-controls="floor-tab4-pane"
                              aria-selected="false"
                            >
                              Top Garden{" "}
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="floor-tab1-pane"
                        role="tabpanel"
                        aria-labelledby="floor-tab1"
                        tabindex="0"
                      >
                        <div className="property-grid-plan fadeinup wow">
                          <div className="property-grid-thumb">
                            <img
                              src="/images/property-details/property__plan_1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="property-grid-details">
                            <h4 className="property-grid-title">
                              First Floor{" "}
                            </h4>
                            <p className="property-grid-text mb-25">
                              Doloremque laudantium, totam rem aperiam, eaque
                              ipsa quae ab illo inventore veritatis et quasi
                              architecto beatae vitae dicta sunt explicabo.
                              Dolorem ipsum quia dolor sit amet,{" "}
                            </p>
                            <p className="text-desc">
                              consectetur, adipisci velit, sed quia non numquam
                              eius modi tempora incidunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade fadeinup wow"
                        id="floor-tab2-pane"
                        role="tabpanel"
                        aria-labelledby="floor-tab2"
                        tabindex="0"
                      >
                        <div className="property-grid-plan">
                          <div className="property-grid-thumb">
                            <img
                              src="/images/property-details/property__plan_1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="property-grid-details">
                            <h4 className="property-grid-title">
                              Second Floor{" "}
                            </h4>
                            <p className="property-grid-text mb-25">
                              Doloremque laudantium, totam rem aperiam, eaque
                              ipsa quae ab illo inventore veritatis et quasi
                              architecto beatae vitae dicta sunt explicabo.
                              Dolorem ipsum quia dolor sit amet,{" "}
                            </p>
                            <p className="text-desc">
                              consectetur, adipisci velit, sed quia non numquam
                              eius modi tempora incidunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="floor-tab3-pane"
                        role="tabpanel"
                        aria-labelledby="floor-tab3"
                        tabindex="0"
                      >
                        <div className="property-grid-plan">
                          <div className="property-grid-thumb">
                            <img
                              src="/images/property-details/property__plan_1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="property-grid-details">
                            <h4 className="property-grid-title">
                              Third Floor{" "}
                            </h4>
                            <p className="property-grid-text mb-25">
                              Doloremque laudantium, totam rem aperiam, eaque
                              ipsa quae ab illo inventore veritatis et quasi
                              architecto beatae vitae dicta sunt explicabo.
                              Dolorem ipsum quia dolor sit amet,{" "}
                            </p>
                            <p className="text-desc">
                              consectetur, adipisci velit, sed quia non numquam
                              eius modi tempora incidunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="floor-tab4-pane"
                        role="tabpanel"
                        aria-labelledby="floor-tab4"
                        tabindex="0"
                      >
                        <div className="property-grid-plan">
                          <div className="property-grid-thumb">
                            <img
                              src="/images/property-details/property__plan_1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="property-grid-details">
                            <h4 className="property-grid-title">Top Garden </h4>
                            <p className="property-grid-text mb-25">
                              Doloremque laudantium, totam rem aperiam, eaque
                              ipsa quae ab illo inventore veritatis et quasi
                              architecto beatae vitae dicta sunt explicabo.
                              Dolorem ipsum quia dolor sit amet,{" "}
                            </p>
                            <p className="text-desc">
                              consectetur, adipisci velit, sed quia non numquam
                              eius modi tempora incidunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="page-title mt-50 mb-30 fadeinup wow">
                      Location
                    </h3>
                    <div className="location-map fadeinup wow">
                      <div className="contact-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                          allowfullscreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                      <div className="location-map-address">
                        <div className="thumb">
                          <img
                            src="/images/property-details/property-details_1.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="media-body">
                          <h4 className="title">Address:</h4>
                          <p className="text">
                            Brooklyn, New York 11233, United States
                          </p>
                          <h4 className="title">Post Code:</h4>
                          <p className="text">12345</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search  ">
                  <h3 className="widget_title">search</h3>
                  <form className="search-form">
                    <input type="text" placeholder="Enter Keyword" />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="widget  ">
                  <h3 className="widget_title">Featured Listings</h3>
                  <div className="recent-post-wrap featured-listing">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="property-details.html">
                          <img
                            src="/images/blog/featured-listing-sidebar-1-1.jpg"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a
                            className="text-inherit"
                            href="property-details.html"
                          >
                            Cometes contabesco audacia aeneus tui canonicus
                          </a>
                        </h4>
                        <div className="property-features-wrap">
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/bed.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">Bed 2</h5>
                          </div>
                          <div className="divider"></div>
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/bath.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">Bath 2</h5>
                          </div>
                          <div className="divider"></div>
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/sqft.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">1599 sqft</h5>
                          </div>
                        </div>
                        <div className="recent-post-meta">
                          <a href="property-details.html">$9850,00</a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="property-details.html">
                          <img
                            src="/images/blog/featured-listing-sidebar-1-2.jpg"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a
                            className="text-inherit"
                            href="property-details.html"
                          >
                            Cometes contabesco audacia aeneus tui canonicus
                          </a>
                        </h4>
                        <div className="property-features-wrap">
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/bed.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">Bed 2</h5>
                          </div>
                          <div className="divider"></div>
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/bath.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">Bath 2</h5>
                          </div>
                          <div className="divider"></div>
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/sqft.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">1599 sqft</h5>
                          </div>
                        </div>
                        <div className="recent-post-meta">
                          <a href="property-details.html">$9850,00</a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="property-details.html">
                          <img
                            src="/images/blog/featured-listing-sidebar-1-3.jpg"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a
                            className="text-inherit"
                            href="property-details.html"
                          >
                            Cometes contabesco audacia aeneus tui canonicus
                          </a>
                        </h4>
                        <div className="property-features-wrap">
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/bed.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">Bed 2</h5>
                          </div>
                          <div className="divider"></div>
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/bath.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">Bath 2</h5>
                          </div>
                          <div className="divider"></div>
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/sqft.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">1599 sqft</h5>
                          </div>
                        </div>
                        <div className="recent-post-meta">
                          <a href="property-details.html">$8850,00</a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="property-details.html">
                          <img
                            src="/images/blog/featured-listing-sidebar-1-4.jpg"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a
                            className="text-inherit"
                            href="property-details.html"
                          >
                            Cometes contabesco audacia aeneus tui canonicus
                          </a>
                        </h4>
                        <div className="property-features-wrap">
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/bed.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">Bed 2</h5>
                          </div>
                          <div className="divider"></div>
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/bath.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">Bath 2</h5>
                          </div>
                          <div className="divider"></div>
                          <div className="property-features-item">
                            <div className="thumb">
                              <img src="/images/icons/sqft.svg" alt="icon" />
                            </div>
                            <h5 className="feature-title">1599 sqft</h5>
                          </div>
                        </div>
                        <div className="recent-post-meta">
                          <a href="property-details.html">$7850,00</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget sidebar-contact-form">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="contact-form-widget">
                    <form action="#" className="newsletter-form">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your Phone"
                          required=""
                        />
                      </div>
                      <div className="form-group mb-4">
                        <textarea
                          name="Your message"
                          id="message"
                          cols="30"
                          rows="3"
                          className="form-control"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="form-btn pt-2">
                        <button type="submit" className="th-btn radius">
                          Send Us
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="widget widget_banner  "
                  data-bg-src="/images/bg/widget_banner.jpg"
                >
                  <div className="widget-banner">
                    <h2 className="title">
                      We can help you to find real estate agency
                    </h2>
                    <a href="contact.html" className="th-btn radius">
                      Contact with Agent
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetails;
