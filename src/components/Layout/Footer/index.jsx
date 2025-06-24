import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper footer-default">
      <div className="widget-area">
        <div className="container">
          <div className="footer-all-widget-wrapper">
            <div className="footer-all-widget-item">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="index.html">
                      <Image
                        src="/images/logos/logo-white.svg"
                        width={199}
                        height={56}
                        alt="Piller-html"
                      />
                    </a>
                  </div>
                  <p className="about-text">
                    Pillar is a luxury to the resilience, adaptability, Spacious
                    modern villa living room with centrally placed swimming pool
                    blending indooroutdoor.
                  </p>

                  <div className="footer-info-wrap">
                    <div className="footer-info">
                      <i className="fas fa-phone"></i>
                      <p className="info-box_link">
                        <a href="tel:+00(123)456789012">
                          +00 (123) 456 789 012
                        </a>
                      </p>
                    </div>
                    <div className="footer-info">
                      <i className="fas fa-envelope"></i>
                      <p className="info-box_link">
                        {" "}
                        <a href="mailto:infomail123@domain.com">
                          infomail123@domain.com
                        </a>
                      </p>
                    </div>
                    <div className="footer-info">
                      <i className="fas fa-location-dot"></i>
                      <p className="info-box_link">
                        <span>
                          West 2nd lane, Inner circular road, New York City
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-all-widget-item">
              <div className="footer-right-wrap">
                <div className="footer-item-wrap">
                  <div className="footer-item">
                    <div className="widget widget_nav_menu footer-widget">
                      <h3 className="widget_title">Featured Houses</h3>
                      <div className="menu-all-pages-container">
                        <ul className="menu">
                          <li>
                            <a href="service.html">#Villa</a>
                          </li>
                          <li>
                            <a href="service.html">#Commercial</a>
                          </li>
                          <li>
                            <a href="service.html">#Farm Houses</a>
                          </li>
                          <li>
                            <a href="service.html">#Apartments</a>
                          </li>
                          <li>
                            <a href="service.html">#Apartments</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-item">
                    <div className="widget widget_nav_menu footer-widget">
                      <h3 className="widget_title">Quick Links</h3>
                      <div className="menu-all-pages-container">
                        <ul className="menu">
                          <li>
                            <a href="service.html">Strategy Services</a>
                          </li>
                          <li>
                            <a href="service.html">Management</a>
                          </li>
                          <li>
                            <a href="service.html">Privacy & Policy</a>
                          </li>
                          <li>
                            <a href="service.html">Sitemap</a>
                          </li>
                          <li>
                            <a href="service.html">Term & Conditions</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-item">
                    <div className="widget widget_nav_menu footer-widget">
                      <h3 className="widget_title">Support</h3>
                      <div className="menu-all-pages-container">
                        <ul className="menu">
                          <li>
                            <a href="contact.html">Help Center</a>
                          </li>
                          <li>
                            <a href="service.html">FAQs</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="contact.html">Ticket Support</a>
                          </li>
                          <li>
                            <a href="contact.html">Live Chat</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-item">
                    <div className="widget widget_banner footer-widget">
                      <h3 className="widget_title">Pillar Location</h3>
                      <div className="widget-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1658812932163!5m2!1sen!2sbd"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-right-bottom-wrap">
                  <div className="footer-right-bottom-item">
                    <div className="footer-right-bottom-item__thumb help">
                      <Image
                        src="/images/home/footer-default-icon-1-1.png"
                        width={87}
                        height={50}
                        alt="img"
                      />
                    </div>
                    <div className="footer-right-bottom-item__content">
                      <h4 className="box-title">
                        <a href="contact.html">Need to Home buy or sell?</a>
                      </h4>
                    </div>
                  </div>
                  <div className="footer-right-bottom-item scan">
                    <div className="footer-right-bottom-item__thumb">
                      <Image
                        width={43}
                        height={51}
                        src="/images/logos/footer-default-icon-1-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="footer-right-bottom-item__content">
                      <p>Download on the</p>
                      <h4 className="box-title">
                        <a href="https://www.apple.com/app-store/">App Store</a>
                      </h4>
                    </div>
                    <div className="footer-right-bottom-item__right">
                      <Image
                        src="/images/logos/footer-default-icon-1-2-scan.png"
                        alt="img"
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>
                  <div className="footer-right-bottom-item scan">
                    <div className="footer-right-bottom-item__thumb">
                      <Image
                        src="/images/logos/footer-default-icon-1-3.png"
                        alt="img"
                        width={43}
                        height={49}
                      />
                    </div>
                    <div className="footer-right-bottom-item__content">
                      <p>GET IT ON</p>
                      <h4 className="box-title">
                        <a href="https://play.google.com/store/apps">
                          Google Play
                        </a>
                      </h4>
                    </div>
                    <div className="footer-right-bottom-item__right">
                      <Image
                        src="/images/logos/footer-default-icon-1-2-scan.png"
                        alt="img"
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div
          className="footer-bottom-top-shape animation-infinite"
          data-bg-src="/images/home/footer-bottom-top-shape.png"
        ></div>
        <div className="container">
          <div className="row gy-3 justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-7">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright"></i> 2025{" "}
                <a href="index.html">Piller</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-default-copy-right">
                <p>Social Media:</p>
                <div className="th-social">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.whatsapp.com/">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
