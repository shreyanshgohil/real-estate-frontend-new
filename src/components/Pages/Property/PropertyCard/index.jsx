import Image from "next/image";
import React from "react";

const PropertyCard = ({ singleFlatDetails }) => {
  return (
    <div class="popular-list-1 list-style">
      <div class="thumb-wrapper">
        <div
          class="th-slider"
          data-slider-options='{"loop":false, "autoplay": false,"autoHeight": true, "effect":"fade"}'
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a
                class="popular-popup-image"
                href="/images/popular/popular-1-1.jpg"
              >
                <Image
                  src="/images/popular/popular-1-1.jpg"
                  width={475}
                  height={334}
                  alt=""
                />
              </a>
            </div>
            <div class="swiper-slide">
              <a
                class="popular-popup-image"
                href="/images/popular/popular-1-2.jpg"
              >
                <Image
                  src="/images/popular/popular-1-2.jpg"
                  width={475}
                  height={333}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div class="icon-wrap">
            <button class="slider-arrow slider-prev">
              <i class="far fa-arrow-left"></i>
            </button>
            <button class="slider-arrow slider-next">
              <i class="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
        {/* <div class="actions">
                              <a href="wishlist.html" class="icon-btn">
                                <i class="fas fa-heart"></i>
                              </a>
                            </div> */}
        {/* <div class="actions-style-2-wrapper">
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
        </div> */}
        <div class="popular-badge">
          <Image
            src="/images/icons/sell_rent_icon.svg"
            width={54}
            height={30}
            alt=""
          />
          <p>For Sale</p>
        </div>
      </div>
      <div class="property-content">
        <div class="media-body">
          <h3 class="box-title">
            {" "}
            <a href="property-details.html">{singleFlatDetails.name}</a>
          </h3>
          <div class="box-text">
            <div class="icon">
              <Image
                src="/images/icons/popular-location.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>{" "}
            <span>
              {singleFlatDetails.placeName} {singleFlatDetails.city},{" "}
              {singleFlatDetails.stateName}
            </span>
          </div>
        </div>

        <ul class="property-featured">
          <li>
            <div class="icon">
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
            <div class="icon">
              <i class="fa-solid fa-building"></i>
            </div>
            Bath 2
          </li>
          <li>
            <div class="icon">
              <i class="fa-solid fa-buildings"></i>
            </div>
            1500 sqft
          </li>
          <li>
            <div class="icon">
              <i class="fa-solid fa-house-chimney-window"></i>
            </div>
            Bed 4
          </li>
        </ul>
        <div class="property-bottom">
          <h6 class="box-title">
            <i class="fa-solid fa-indian-rupee-sign" /> 91 Lac - 1.3 Cr*
          </h6>
          <a class="th-btn sm style3 pill" href="property-details.html">
            View More{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
