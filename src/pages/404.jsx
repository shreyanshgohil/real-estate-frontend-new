import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import BreadcumbMenu from "@/components/Common/BreadcumbMenu";

const NotFound = () => {
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
    title: "Error Page",
    page: "Error Page",
    baseUrl: "/",
    base: "Home",
  };
  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <section
        className="bg-smoke space"
        data-bg-src="/images/shape/error-shape-bg.png"
      >
        <div
          className="shape-mockup d-none d-xxl-block"
          data-bottom="0%"
          data-right="0%"
        >
          <img src="/images/error/error-bottom.png" alt="img" />
        </div>
        <div
          className="error-bg-img"
          data-mask-src="/images/error/error-bg-shape.png"
        >
          <img src="/images/error/error-bg.png" alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="error-content">
                <h2 className="error-title">Error 404</h2>
                <p className="error-text">
                  Oops! The page you’re looking for doesn’t exist
                </p>
                <a href="index.html" className="th-btn radius">
                  Back To Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
