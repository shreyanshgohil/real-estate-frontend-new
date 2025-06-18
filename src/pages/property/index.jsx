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
          <div className="tab-content"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Property;
