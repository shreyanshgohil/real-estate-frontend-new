import React from "react";

const Header = () => {
  return (
    <div class="sticky-wrapper">
      <div class="menu-area">
        <div class="container th-container3">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto">
              <div class="header-logo">
                <a href="index.html">
                  <img src="/images/logos/logo.svg" alt="Piller-html" />
                </a>
              </div>
            </div>
            <div class="col-auto">
              <nav class="main-menu d-none d-lg-inline-block">
                <ul>
                  <li class="menu-item-has-children active">
                    <a href="index.html">Home</a>
                    <ul class="mega-menu mega-menu-content allow-natural-scroll">
                      <li>
                        <div class="container">
                          <div class="row gy-4">
                            <div class="col-lg-4">
                              <div class="mega-menu-box">
                                <div class="mega-menu-img">
                                  <img
                                    src="assets/img/pages/index.jpg"
                                    alt="Home One"
                                  />
                                  <div class="btn-wrap">
                                    <a href="index.html" class="th-btn radius">
                                      View Demo
                                    </a>
                                  </div>
                                </div>
                                <h3 class="mega-menu-title">
                                  <a href="index.html">
                                    {" "}
                                    <span class="text-theme">01.</span> Home
                                    Real Estate{" "}
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="mega-menu-box">
                                <div class="mega-menu-img">
                                  <img
                                    src="assets/img/pages/home-2.jpg"
                                    alt="Home Two"
                                  />
                                  <div class="btn-wrap">
                                    <a href="home-2.html" class="th-btn radius">
                                      View Demo
                                    </a>
                                  </div>
                                </div>
                                <h3 class="mega-menu-title">
                                  <a href="home-2.html">
                                    {" "}
                                    <span class="text-theme">02.</span> Home
                                    Property
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="mega-menu-box">
                                <div class="mega-menu-img">
                                  <img
                                    src="assets/img/pages/home-3.jpg"
                                    alt="Home Three"
                                  />
                                  <div class="btn-wrap">
                                    <a href="home-3.html" class="th-btn radius">
                                      View Demo
                                    </a>
                                  </div>
                                </div>
                                <h3 class="mega-menu-title">
                                  <a href="home-3.html">
                                    {" "}
                                    <span class="text-theme">03.</span> Home Map
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Property</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="property.html">Properties</a>
                      </li>
                      <li>
                        <a href="property-details.html">Properties Details</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Agencies</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="agency.html">Agencies </a>
                      </li>
                      <li>
                        <a href="agency-details.html">Agency Details</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul class="sub-menu">
                      <li class="menu-item-has-children">
                        <a href="#">Shop</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-details.html">Shop Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="team.html">Agents Page</a>
                      </li>
                      <li>
                        <a href="team-details.html">Agent Details</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery Page</a>
                      </li>
                      <li>
                        <a href="service.html">Service Page</a>
                      </li>
                      <li>
                        <a href="service-right-sidebar.html">
                          Service with sidebar
                        </a>
                      </li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="neighborhood-guide.html">Neighborhood Guide</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq Page</a>
                      </li>
                      <li>
                        <a href="error.html">Error Page</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="blog.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-grid-right-sidebar.html">
                          Blog Grid With Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-left-sidebar.html">
                          Blog Grid With Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
              <button type="button" class="th-menu-toggle d-block d-lg-none">
                <i class="far fa-bars"></i>
              </button>
            </div>
            <div class="col-auto d-none d-xl-block">
              <div class="header-button">
                <a href="contact.html" class="th-btn bg-black pill">
                  <i class="fa-regular fa-house-chimney me-2"></i> Add Listing{" "}
                </a>
                <button type="button" class="sidemenu-bar sideMenuInfo pill">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
