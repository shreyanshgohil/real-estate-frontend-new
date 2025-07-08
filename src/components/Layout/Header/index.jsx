import Image from "next/image";
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
                  <Image
                    src="/images/logos/logo.svg"
                    alt="Piller-html"
                    width={199}
                    height={44}
                  />
                </a>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu d-none d-lg-inline-block">
                <ul>
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
