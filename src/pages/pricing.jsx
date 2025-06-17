import BreadCumMenu from "@/components/Common/BreadcumbMenu";
import Video from "@/components/Common/Video";
import Layout from "@/components/Layout";
import FAQ from "@/components/Pages/Home/FAQ";
import PricingPlan from "@/components/Pages/Pricing/PricingPlan";
import React, { useEffect } from "react";

const Pricing = () => {
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
    title: "Pricing Table",
    page: "Pricing Table",
    baseUrl: "/",
    base: "Home",
  };

  return (
    <Layout>
      <BreadCumMenu breadCumData={breadCumData} />
      <PricingPlan />
      <Video />
      <FAQ />
    </Layout>
  );
};

export default Pricing;
