import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import Layout from "@/components/Layout";
import { animationMoving } from "@/utils/animation";
import Image from "next/image";
import { useLayoutEffect } from "react";

const NotFound = () => {
  useLayoutEffect(() => {
    animationMoving();
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
          <Image
            src="/images/error/error-bottom.png"
            width={793}
            height={792}
            alt=""
          />
        </div>
        <div
          className="error-bg-img"
          data-mask-src="/images/error/error-bg-shape.png"
        >
          <Image
            width={1205}
            height={840}
            src="/images/error/error-bg.png"
            alt=""
          />
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
