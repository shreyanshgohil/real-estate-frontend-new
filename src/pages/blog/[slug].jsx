import React, { useEffect } from "react";
import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import Layout from "@/components/Layout";
const BlogDetails = () => {
  // useEffect(() => {
  //   function shapeMockup(elements) {
  //     elements.forEach(function (element) {
  //       const shapeTop = element.getAttribute("data-top");
  //       const shapeRight = element.getAttribute("data-right");
  //       const shapeBottom = element.getAttribute("data-bottom");
  //       const shapeLeft = element.getAttribute("data-left");

  //       Object.assign(element.style, {
  //         top: shapeTop,
  //         right: shapeRight,
  //         bottom: shapeBottom,
  //         left: shapeLeft,
  //       });

  //       element.removeAttribute("data-top");
  //       element.removeAttribute("data-right");
  //       element.removeAttribute("data-bottom");
  //       element.removeAttribute("data-left");

  //       if (element.parentElement) {
  //         element.parentElement.classList.add("shape-mockup-wrap");
  //       }
  //     });
  //   }

  //   // Initialize on DOMContentLoaded
  //   // document.addEventListener("DOMContentLoaded", function () {
  //   const shapeElements = document.querySelectorAll(".shape-mockup");

  //   if (shapeElements.length > 0) {
  //     shapeMockup(Array.from(shapeElements));
  //   }
  //   // });
  // }, []);

  // useEffect(() => {
  //   // Background image
  //   document.querySelectorAll("[data-bg-src]").forEach((el) => {
  //     const src = el.getAttribute("data-bg-src");
  //     el.style.backgroundImage = `url(${src})`;
  //     el.removeAttribute("data-bg-src");
  //     el.classList.add("background-image");
  //   });

  //   // Background color
  //   document.querySelectorAll("[data-bg-color]").forEach((el) => {
  //     const color = el.getAttribute("data-bg-color");
  //     el.style.backgroundColor = color;
  //     el.removeAttribute("data-bg-color");
  //   });

  //   // Theme color (CSS variable)
  //   document.querySelectorAll("[data-theme-color]").forEach((el) => {
  //     const color = el.getAttribute("data-theme-color");
  //     el.style.setProperty("--theme-color", color);
  //     el.removeAttribute("data-theme-color");
  //   });

  //   // Border color as CSS variable
  //   document.querySelectorAll("[data-border]").forEach((el) => {
  //     const borderColor = el.getAttribute("data-border");
  //     el.style.setProperty("--th-border-color", borderColor);
  //   });

  //   // Mask image
  //   document.querySelectorAll("[data-mask-src]").forEach((el) => {
  //     const mask = el.getAttribute("data-mask-src");
  //     el.style.maskImage = `url(${mask})`;
  //     el.style.webkitMaskImage = `url(${mask})`; // For Safari
  //     el.classList.add("bg-mask");
  //     el.removeAttribute("data-mask-src");
  //   });
  // }, []);
  const breadCumData = {
    title: "Blog Details",
    page: " Blog Details",
    baseUrl: "/",
    base: "Home",
  };
  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single">
                <div className="blog-img">
                  <img src="/images/blog/blog-s-1-1.jpg" alt="Image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fa-light fa-user"></i> Michel Smith
                    </a>
                    <a href="blog.html">
                      <i className="fa-regular fa-calendar"></i> 24/02/2025
                    </a>
                    <a href="blog.html">
                      <i className="fa-regular fa-tag"></i> Business
                    </a>
                  </div>
                  <h2 className="blog-title">
                    Building gains into housing stocks and how to trade the
                    sector
                  </h2>
                  <p>
                    On the Questo mobile app, gamified tours in the cities of
                    Belogradchik, Vidin, and Vratsa now take you on a trip to
                    reveal pieces of design and development of solar modules of
                    rich various solar-powered history that just need a little
                    bit of unraveling to be appreciated fully.
                  </p>

                  <p className="mb-40">
                    {" "}
                    At SGW, we’ve been involved in several exciting projects
                    that have enabled us to apply insights you gained from
                    diverse industries to the development of solar modules. Our
                    team has successfully undertaken the design and development
                    of various solar-powered products, ranging from small-scale,
                    solar-powered electronics to larger infrastructure and
                    industrial solutions. These projects have us plenty of
                    interesting engineering challenges.
                  </p>

                  <span className="details-sub-title">
                    <span className="double-line"></span> Work Process
                  </span>
                  <h2 className="blog-title mb-4">Procedure</h2>
                  <p className="mb-40">
                    Agents use high-quality listing photos, virtual tours,
                    social media marketing, and professional staging to attract
                    more buyers and sell homes faster.. To address this, we
                    incorporate onboard batteries to provide supplementary
                    power. However, the temperature can influence battery
                    performance.
                  </p>

                  <div className="check-list mb-50">
                    <ul>
                      <li>Diversity investigation for royal been.</li>
                      <li>
                        Create a structure where participants will add their
                        information.
                      </li>
                      <li>Efforts without a focus.</li>
                      <li>Many contradicting opinions a vision document.</li>
                      <li>A deliverable for workshop participants.</li>
                      <li>
                        Create a structure where participants will add their
                        information.
                      </li>
                    </ul>
                  </div>

                  <p className="mb-50">
                    As a result, it is sometimes necessary to develop
                    temperature control provisions within the product design to
                    ensure optimal battery performance. Additionally, during the
                    engineering and manufactu- ring stages, we also consider
                    serviceability and the ability to repair the product.
                  </p>

                  <blockquote>
                    <p>
                      Real estate agents play a critical role in solving various
                      problems within the real estate community. Their expertise
                      not only helps individual buyers and sellers but also
                      positively impacts the overall housing market, local
                      economy, and community development.
                    </p>
                    <cite>Michel Clarck</cite>
                  </blockquote>

                  <p className="mb-50">
                    The digital landscape is constantly evolving, and On Consult
                    is here to keep you up to date with the latest online
                    marketing trends. Our expert team will guide you through the
                    intricacies of SEO, social media, content marketing, and
                    more. With our help, you can supercharge your online
                    marketing skills and transform businesses.
                  </p>

                  <div className="row gx-30 mt-30 mb-34">
                    <div className="col-md-6 mb-30">
                      <div>
                        <img
                          className="w-100 rounded-10"
                          src="/images/blog/blog_inner_1.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div>
                        <img
                          className="w-100 rounded-10"
                          src="/images/blog/blog_inner_2.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="mb-30">
                    On the Questo mobile app, gamified tours in the cities of
                    Belogradchik, Vidin, and Vratsa now take you on a trip to
                    reveal pieces of design and development of solar modules of
                    rich various solar-powered history that just need a little
                    bit of unraveling to be appreciated fully.
                  </p>

                  <p className="mb-50">
                    At SGW, we’ve been involved in several exciting projects
                    that have enabled us to apply insights you gained from
                    diverse industries to the development of solar modules. Our
                    team has successfully undertaken the design and development
                    of various solar-powered products, ranging from small-scale,
                    solar-powered electronics to larger infrastructure and
                    industrial solutions. These projects have us plenty of
                    interesting engineering challenges.
                  </p>

                  <div className="share-links clearfix ">
                    <div className="row justify-content-between">
                      <div className="col-sm-auto">
                        <span className="share-links-title">Tags:</span>
                        <div className="tagcloud">
                          <a href="blog.html">luxury home</a>
                          <a href="blog.html">Strategey</a>
                          <a href="blog.html">Villa Home</a>
                          <a href="blog.html">Project</a>
                        </div>
                      </div>
                      <div className="col-sm-auto text-xl-end">
                        <span className="share-links-title">
                          Share this article:
                        </span>
                        <div className="th-social">
                          <a href="https://facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="https://instagram.com/" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="th-comments-wrap ">
                <h2 className="blog-inner-title h4">Comments (3)</h2>
                <ul className="comment-list">
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img
                          src="/images/blog/comment-author-1.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <h3 className="name">Adam Jhon</h3>
                        <span className="commented-on">
                          25 Jun, 2025 08:56pm
                        </span>
                        <p className="text">
                          Through this blog, we aim to inspire readers and of
                          the blog to embrace education as a lifelong journey
                          and to advocate for quality education
                        </p>
                        <div className="reply_and_edit">
                          <a href="blog-details.html" className="reply-btn">
                            <i className="fa-solid fa-reply"></i> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="th-comment-item">
                        <div className="th-post-comment">
                          <div className="comment-avater">
                            <img
                              src="/images/blog/comment-author-2.jpg"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <h3 className="name">Jhon Abraham</h3>
                            <span className="commented-on">
                              25 Jun, 2025 08:56pm
                            </span>
                            <p className="text">
                              Education News and Trends: and of the blog We
                              provide updates on the latest blog and
                              developments and trends in the education sector.
                            </p>
                            <div className="reply_and_edit">
                              <a href="blog-details.html" className="reply-btn">
                                <i className="fa-solid fa-reply"></i> Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img
                          src="/images/blog/comment-author-3.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <h3 className="name">Anadi Juila</h3>
                        <span className="commented-on">
                          25 Jun, 2025 08:56pm
                        </span>
                        <p className="text">
                          We discuss strategies to and of the blog help students
                          and other people public make informed decisions about
                          their educational and career paths.
                        </p>
                        <div className="reply_and_edit">
                          <a href="blog-details.html" className="reply-btn">
                            <i className="fa-solid fa-reply"></i> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="th-comment-form blog-comment-wrap">
                  <div className="form-title mb-25">
                    <h3 className="blog-inner-title h4">Leave a Reply</h3>
                    <p className="form-text">
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group style-border">
                      <i className="fa-regular fa-user"></i>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name*"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group style-border">
                      <i className="fa-regular fa-envelope"></i>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Your email*"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 form-group style-border">
                      <i className="fa-solid fa-globe"></i>
                      <input
                        id="website"
                        name="name"
                        type="text"
                        placeholder="Website*"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 form-group style-border">
                      <i className="fa-regular fa-pen"></i>
                      <textarea
                        placeholder="Comment*"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="col-12 form-group">
                      <input
                        id="reviewcheck"
                        name="reviewcheck"
                        type="checkbox"
                      />
                      <label for="reviewcheck">
                        Save my name, email, and website in this browser for the
                        next time I comment.<span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-12 form-group style-border mb-0">
                      <button className="th-btn radius">Send Message</button>
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
                  className="widget widget_banner"
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

export default BlogDetails;
