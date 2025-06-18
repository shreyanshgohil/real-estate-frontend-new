import Layout from "@/components/Layout";
import { useEffect } from "react";
import BreadcumbMenu from "@/components/Common/BreadcumbMenu";

const Property = () => {
  useEffect(() => {
    function shapeMockup(elements) {
      elements.forEach(function (element) {
        const shapeTop = element.getAttribute("data-top");
        const shapeRight = element.getAttribute("data-right");
        const shapeBottom = element.getAttribute("data-bottom");
        const shapeLeft = element.getAttribute("data-left");

        Object.assign(element.style, {
          top: shapeTop,
          right: shapeRight,
          bottom: shapeBottom,
          left: shapeLeft,
        });

        element.removeAttribute("data-top");
        element.removeAttribute("data-right");
        element.removeAttribute("data-bottom");
        element.removeAttribute("data-left");

        if (element.parentElement) {
          element.parentElement.classList.add("shape-mockup-wrap");
        }
      });
    }

    // Initialize on DOMContentLoaded
    // document.addEventListener("DOMContentLoaded", function () {
    const shapeElements = document.querySelectorAll(".shape-mockup");

    if (shapeElements.length > 0) {
      shapeMockup(Array.from(shapeElements));
    }
    // });
  }, []);

  useEffect(() => {
    // Background image
    document.querySelectorAll("[data-bg-src]").forEach((el) => {
      const src = el.getAttribute("data-bg-src");
      el.style.backgroundImage = `url(${src})`;
      el.removeAttribute("data-bg-src");
      el.classList.add("background-image");
    });

    // Background color
    document.querySelectorAll("[data-bg-color]").forEach((el) => {
      const color = el.getAttribute("data-bg-color");
      el.style.backgroundColor = color;
      el.removeAttribute("data-bg-color");
    });

    // Theme color (CSS variable)
    document.querySelectorAll("[data-theme-color]").forEach((el) => {
      const color = el.getAttribute("data-theme-color");
      el.style.setProperty("--theme-color", color);
      el.removeAttribute("data-theme-color");
    });

    // Border color as CSS variable
    document.querySelectorAll("[data-border]").forEach((el) => {
      const borderColor = el.getAttribute("data-border");
      el.style.setProperty("--th-border-color", borderColor);
    });

    // Mask image
    document.querySelectorAll("[data-mask-src]").forEach((el) => {
      const mask = el.getAttribute("data-mask-src");
      el.style.maskImage = `url(${mask})`;
      el.style.webkitMaskImage = `url(${mask})`; // For Safari
      el.classList.add("bg-mask");
      el.removeAttribute("data-mask-src");
    });
  }, []);
  const breadCumData = {
    title: "Properties",
    page: " Properties",
    baseUrl: "/",
    base: "Home",
  };

  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="th-sort-bar property-style">
            <div className="row justify-content-between align-items-center">
              <div className="col-md">
                <h4
                  class="box-title text-start fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  Property Listing
                </h4>
              </div>
              <div className="col-md-auto">
                <div
                  class="sorting-filter-wrap fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <div class="nav">
                    <a
                      class="active"
                      href="#"
                      id="tab-shop-list"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-list"
                      role="tab"
                      aria-controls="tab-grid"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-list"></i>
                    </a>
                    <a
                      href="#"
                      id="tab-shop-grid"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-grid"
                      role="tab"
                      aria-controls="tab-grid"
                      aria-selected="true"
                    >
                      {" "}
                      <i class="fa-light fa-grid-2"></i>
                    </a>
                  </div>
                  <form class="woocommerce-ordering" method="get">
                    <select
                      name="orderby"
                      class="orderby"
                      aria-label="Shop order"
                    >
                      <option value="menu_order" selected="selected">
                        Default Sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div
              class="tab-pane fade active show"
              id="tab-list"
              role="tabpanel"
              aria-labelledby="tab-shop-list"
            >
              <div class="row gy-40 justify-content-center">
                <div class="col-xl-8 col-lg-12">
                  <div class="row gy-30">
                    <div class="col-xl-12 fadeinup wow">
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
                                  <img
                                    src="/images/popular/popular-1-1.jpg"
                                    alt="Image"
                                  />
                                </a>
                              </div>
                              <div class="swiper-slide">
                                <a
                                  class="popular-popup-image"
                                  href="/images/popular/popular-1-2.jpg"
                                >
                                  <img
                                    src="/images/popular/popular-1-2.jpg"
                                    alt="Image"
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
                            <img
                              src="/images/icons/sell_rent_icon.svg"
                              alt="icon"
                            />
                            <p>For Sale</p>
                          </div>
                        </div>
                        <div class="property-content">
                          <div class="media-body">
                            <h3 class="box-title">
                              {" "}
                              <a href="property-details.html">
                                Charming Beach House
                              </a>
                            </h3>
                            <div class="box-text">
                              <div class="icon">
                                <img
                                  src="/images/icons/popular-location.svg"
                                  alt="icon"
                                />
                              </div>{" "}
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
                            <a
                              class="th-btn sm style3 pill"
                              href="property-details.html"
                            >
                              View More{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="th-pagination text-center pt-4">
                      <ul>
                        <li>
                          <a href="blog.html">
                            <i class="far fa-arrow-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">1</a>
                        </li>
                        <li>
                          <a href="blog.html">2</a>
                        </li>
                        <li>
                          <a href="blog.html">3</a>
                        </li>
                        <li>
                          <a class="next-page" href="blog.html">
                            Next <i class="far fa-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-lg-6">
                  <aside class="sidebar-area">
                    <div class="widget widget_search  ">
                      <h3 class="widget_title">search</h3>
                      <form class="search-form">
                        <input type="text" placeholder="Enter Keyword" />
                        <button type="submit">
                          <i class="far fa-search"></i>
                        </button>
                      </form>
                    </div>
                    <div class="widget  ">
                      <h3 class="widget_title">Featured Listings</h3>
                      <div class="recent-post-wrap featured-listing">
                        <div class="recent-post">
                          <div class="media-img">
                            <a href="property-details.html">
                              <img
                                src="/images/blog/featured-listing-sidebar-1-1.jpg"
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="media-body">
                            <h4 class="post-title">
                              <a
                                class="text-inherit"
                                href="property-details.html"
                              >
                                Cometes contabesco audacia aeneus tui canonicus
                              </a>
                            </h4>
                            <div class="property-features-wrap">
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img src="/images/icons/bed.svg" alt="icon" />
                                </div>
                                <h5 class="feature-title">Bed 2</h5>
                              </div>
                              <div class="divider"></div>
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img
                                    src="/images/icons/bath.svg"
                                    alt="icon"
                                  />
                                </div>
                                <h5 class="feature-title">Bath 2</h5>
                              </div>
                              <div class="divider"></div>
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img
                                    src="/images/icons/sqft.svg"
                                    alt="icon"
                                  />
                                </div>
                                <h5 class="feature-title">1599 sqft</h5>
                              </div>
                            </div>
                            <div class="recent-post-meta">
                              <a href="property-details.html">$9850,00</a>
                            </div>
                          </div>
                        </div>
                        <div class="recent-post">
                          <div class="media-img">
                            <a href="property-details.html">
                              <img
                                src="/images/blog/featured-listing-sidebar-1-2.jpg"
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="media-body">
                            <h4 class="post-title">
                              <a
                                class="text-inherit"
                                href="property-details.html"
                              >
                                Cometes contabesco audacia aeneus tui canonicus
                              </a>
                            </h4>
                            <div class="property-features-wrap">
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img src="/images/icons/bed.svg" alt="icon" />
                                </div>
                                <h5 class="feature-title">Bed 2</h5>
                              </div>
                              <div class="divider"></div>
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img
                                    src="/images/icons/bath.svg"
                                    alt="icon"
                                  />
                                </div>
                                <h5 class="feature-title">Bath 2</h5>
                              </div>
                              <div class="divider"></div>
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img
                                    src="/images/icons/sqft.svg"
                                    alt="icon"
                                  />
                                </div>
                                <h5 class="feature-title">1599 sqft</h5>
                              </div>
                            </div>
                            <div class="recent-post-meta">
                              <a href="property-details.html">$9850,00</a>
                            </div>
                          </div>
                        </div>
                        <div class="recent-post">
                          <div class="media-img">
                            <a href="property-details.html">
                              <img
                                src="/images/blog/featured-listing-sidebar-1-3.jpg"
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="media-body">
                            <h4 class="post-title">
                              <a
                                class="text-inherit"
                                href="property-details.html"
                              >
                                Cometes contabesco audacia aeneus tui canonicus
                              </a>
                            </h4>
                            <div class="property-features-wrap">
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img src="/images/icons/bed.svg" alt="icon" />
                                </div>
                                <h5 class="feature-title">Bed 2</h5>
                              </div>
                              <div class="divider"></div>
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img
                                    src="/images/icons/bath.svg"
                                    alt="icon"
                                  />
                                </div>
                                <h5 class="feature-title">Bath 2</h5>
                              </div>
                              <div class="divider"></div>
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img
                                    src="/images/icons/sqft.svg"
                                    alt="icon"
                                  />
                                </div>
                                <h5 class="feature-title">1599 sqft</h5>
                              </div>
                            </div>
                            <div class="recent-post-meta">
                              <a href="property-details.html">$8850,00</a>
                            </div>
                          </div>
                        </div>
                        <div class="recent-post">
                          <div class="media-img">
                            <a href="property-details.html">
                              <img
                                src="/images/blog/featured-listing-sidebar-1-4.jpg"
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="media-body">
                            <h4 class="post-title">
                              <a
                                class="text-inherit"
                                href="property-details.html"
                              >
                                Cometes contabesco audacia aeneus tui canonicus
                              </a>
                            </h4>
                            <div class="property-features-wrap">
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img src="/images/icons/bed.svg" alt="icon" />
                                </div>
                                <h5 class="feature-title">Bed 2</h5>
                              </div>
                              <div class="divider"></div>
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img
                                    src="/images/icons/bath.svg"
                                    alt="icon"
                                  />
                                </div>
                                <h5 class="feature-title">Bath 2</h5>
                              </div>
                              <div class="divider"></div>
                              <div class="property-features-item">
                                <div class="thumb">
                                  <img
                                    src="/images/icons/sqft.svg"
                                    alt="icon"
                                  />
                                </div>
                                <h5 class="feature-title">1599 sqft</h5>
                              </div>
                            </div>
                            <div class="recent-post-meta">
                              <a href="property-details.html">$7850,00</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="widget sidebar-contact-form">
                      <h3 class="widget_title">Contact Us</h3>
                      <div class="contact-form-widget">
                        <form action="#" class="newsletter-form">
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="email"
                              placeholder="Your Email"
                              required=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Your Phone"
                              required=""
                            />
                          </div>
                          <div class="form-group mb-4">
                            <textarea
                              name="Your message"
                              id="message"
                              cols="30"
                              rows="3"
                              class="form-control"
                              placeholder="Your Message"
                            ></textarea>
                          </div>
                          <div class="form-btn pt-2">
                            <button type="submit" class="th-btn radius">
                              Send Us
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      class="widget widget_banner  "
                      data-bg-src="/images/bg/widget_banner.jpg"
                    >
                      <div class="widget-banner">
                        <h2 class="title">
                          We can help you to find real estate agency
                        </h2>
                        <a href="contact.html" class="th-btn radius">
                          Contact with Agent
                        </a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Property;
