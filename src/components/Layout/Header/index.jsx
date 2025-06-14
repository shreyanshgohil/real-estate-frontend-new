import React from "react";

const Header = () => {
  return (
    <div className="sticky-wrapper">
      <div className="menu-area">
        <div className="container th-container3">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <a href="index.html">
                  <img src="/images/logos/logo.svg" alt="Piller-html" />
                </a>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu d-none d-lg-inline-block">
                <ul>
                  <li className="menu-item-has-children active">
                    <a href="index.html">Home</a>
                    <ul className="mega-menu mega-menu-content allow-natural-scroll">
                      <li>
                        <div className="container">
                          <div className="row gy-4">
                            <div className="col-lg-4">
                              <div className="mega-menu-box">
                                <div className="mega-menu-img">
                                  <img
                                    src="assets/img/pages/index.jpg"
                                    alt="Home One"
                                  />
                                  <div className="btn-wrap">
                                    <a
                                      href="index.html"
                                      className="th-btn radius"
                                    >
                                      View Demo
                                    </a>
                                  </div>
                                </div>
                                <h3 className="mega-menu-title">
                                  <a href="index.html">
                                    {" "}
                                    <span className="text-theme">01.</span> Home
                                    Real Estate{" "}
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mega-menu-box">
                                <div className="mega-menu-img">
                                  <img
                                    src="assets/img/pages/home-2.jpg"
                                    alt="Home Two"
                                  />
                                  <div className="btn-wrap">
                                    <a
                                      href="home-2.html"
                                      className="th-btn radius"
                                    >
                                      View Demo
                                    </a>
                                  </div>
                                </div>
                                <h3 className="mega-menu-title">
                                  <a href="home-2.html">
                                    {" "}
                                    <span className="text-theme">02.</span> Home
                                    Property
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mega-menu-box">
                                <div className="mega-menu-img">
                                  <img
                                    src="assets/img/pages/home-3.jpg"
                                    alt="Home Three"
                                  />
                                  <div className="btn-wrap">
                                    <a
                                      href="home-3.html"
                                      className="th-btn radius"
                                    >
                                      View Demo
                                    </a>
                                  </div>
                                </div>
                                <h3 className="mega-menu-title">
                                  <a href="home-3.html">
                                    {" "}
                                    <span className="text-theme">03.</span> Home
                                    Map
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
                  <li className="menu-item-has-children">
                    <a href="#">Property</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="property.html">Properties</a>
                      </li>
                      <li>
                        <a href="property-details.html">Properties Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Agencies</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="agency.html">Agencies </a>
                      </li>
                      <li>
                        <a href="agency-details.html">Agency Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="#">Shop</a>
                        <ul className="sub-menu">
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
                  <li className="menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
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
              <button
                type="button"
                className="th-menu-toggle d-block d-lg-none"
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
            <div className="col-auto d-none d-xl-block">
              <div className="header-button">
                <a href="contact.html" className="th-btn bg-black pill">
                  <i className="fa-regular fa-house-chimney me-2"></i> Add
                  Listing{" "}
                </a>
                <button
                  type="button"
                  className="sidemenu-bar sideMenuInfo pill"
                >
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
