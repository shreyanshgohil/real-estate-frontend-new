import Image from "next/image";
import React from "react";

const PricingPlan = () => {
  return (
    <section className="price-sec-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="price-card ">
              <div className="price-card_top">
                <div className="icon">
                  <Image
                    src="/images/icons/pricing-icon-1.svg"
                    height={40}
                    width={40}
                    alt=""
                  />
                </div>
                <h3 className="price-card_title">Basic Plan</h3>
              </div>

              <div className="price-card_price-wrap">
                <h4 className="price-card_price">
                  <span className="currency">$</span>15900.00{" "}
                  <span className="duration">/month </span>
                </h4>
                <p className="box-text">
                  Automatically connect with prospective clients
                </p>
              </div>
              <div className="price-card_content">
                <div className="checklist style7">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa-light fa-circle-check"></i> Free Listing
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> Ideal for
                      first-time buyers and small families.
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> Apartment
                      sizes: 800 - 1,200 sq. ft.
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> Targeted
                      campaigns on Facebook/Instagram.
                    </li>
                    <li className="unavailable">
                      <i className="fa-light fa-circle-check"></i> 24/7 Support
                      center
                    </li>
                    <li className="unavailable">
                      <i className="fa-light fa-circle-check"></i> 100% money
                      back guarantee
                    </li>
                    <li className="unavailable">
                      <i className="fa-light fa-circle-check"></i> Auto refresh
                      ads
                    </li>
                  </ul>
                </div>
                <a href="service.html" className="w-100 th-btn style3 radius">
                  Get Started{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="price-card active">
              <span className="tag">Most Popular</span>
              <div className="price-card_top">
                <div className="icon">
                  <Image
                    src="/images/icons/pricing-icon-2.svg"
                    height={40}
                    width={40}
                    alt=""
                  />
                </div>
                <h3 className="price-card_title">Advanced Plan</h3>
              </div>

              <div className="price-card_price-wrap">
                <h4 className="price-card_price">
                  <span className="currency">$</span>25000.00{" "}
                  <span className="duration">/month </span>
                </h4>
                <p className="box-text">
                  Automatically connect with prospective clients
                </p>
              </div>
              <div className="price-card_content">
                <div className="checklist style7">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa-light fa-circle-check"></i> Free Listing
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> Suitable for
                      growing families or professionals.
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i>{" "}
                      Apartment/Villa sizes: 1,200 - 2,500 sq. ft.
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> Gated
                      community with recreational facilities.
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> 24/7 Support
                      center
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> 100% money
                      back guarantee
                    </li>
                    <li className="unavailable">
                      <i className="fa-light fa-circle-check"></i> Auto refresh
                      ads
                    </li>
                  </ul>
                </div>
                <a href="service.html" className="w-100 th-btn style3 radius">
                  Get Started{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="price-card ">
              <div className="price-card_top">
                <div className="icon">
                  <Image
                    src="/images/icons/pricing-icon-3.svg"
                    width={24}
                    height={40}
                    alt="img"
                  />
                </div>
                <h3 className="price-card_title">Premium Plan</h3>
              </div>

              <div className="price-card_price-wrap">
                <h4 className="price-card_price">
                  <span className="currency">$</span>35000.00{" "}
                  <span className="duration">/month </span>
                </h4>
                <p className="box-text">
                  Automatically connect with prospective clients
                </p>
              </div>
              <div className="price-card_content">
                <div className="checklist style7">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa-light fa-circle-check"></i> Luxury homes
                      designed for high-end buyers.
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> Prime city
                      locations with waterfront views.
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i>{" "}
                      Apartment/Villa sizes: 2,500 - 5,000 sq. ft.
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> 5 Year
                      validity
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> 24/7 Support
                      center
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> 100% money
                      back guarantee
                    </li>
                    <li>
                      <i className="fa-light fa-circle-check"></i> Auto refresh
                      ads
                    </li>
                  </ul>
                </div>
                <a href="service.html" className="w-100 th-btn style3 radius">
                  Get Started{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
