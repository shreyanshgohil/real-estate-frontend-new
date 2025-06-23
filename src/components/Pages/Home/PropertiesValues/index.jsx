import Image from "next/image";
import React from "react";

const PropertiesValues = () => {
  return (
    <section className="property-values-sec-2  space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <p
                className="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span> Properties Values{" "}
              </p>
              <h2
                className="sec-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                {" "}
                Trusted by 100+ Million Buyers{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="property-values-2-item">
              <div className="thumb">
                <Image
                  src="/images/property-values/property-values-2-1.jpg"
                  width={464}
                  height={527}
                  alt=""
                />
                <div className="plus-icon">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="hover-content">
                  <h4 className="box-title">
                    <a href="property-details.html">Top Rated Villa</a>
                  </h4>
                  <p className="box-text">
                    Find the very best villas with in-depth reviews and ratngs
                    from multiple experts.
                  </p>
                  <a
                    className="th-btn bg-theme pill"
                    href="property-details.html"
                  >
                    Search Villas
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="property-values-2-item ">
              <div className="thumb">
                <Image
                  src="/images/property-values/property-values-2-2.jpg"
                  width={464}
                  height={253}
                  alt=""
                />
                <div className="plus-icon">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="hover-content">
                  <h4 className="box-title">
                    <a href="property-details.html">Royal Garden Estate</a>
                  </h4>
                  <p className="box-text">
                    Find the very best villas with in-depth reviews and ratngs
                    from multiple experts.
                  </p>
                  <a
                    className="th-btn bg-theme pill"
                    href="property-details.html"
                  >
                    Search Villas
                  </a>
                </div>
              </div>
              <div className="thumb">
                <Image
                  src="/images/property-values/property-values-2-2.jpg"
                  width={464}
                  height={253}
                  alt=""
                />
                <div className="plus-icon">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="hover-content">
                  <h4 className="box-title">
                    <a href="property-details.html">Low Rated Villa</a>
                  </h4>
                  <p className="box-text">
                    Find the very best villas with in-depth reviews and ratngs
                    from multiple experts.
                  </p>
                  <a
                    className="th-btn bg-theme pill"
                    href="property-details.html"
                  >
                    Search Villas
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="property-values-2-item">
              <div className="thumb">
                <Image
                  src="/images/property-values/property-values-2-1.jpg"
                  width={464}
                  height={527}
                  alt=""
                />
                <div className="plus-icon">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="hover-content">
                  <h4 className="box-title">
                    <a href="property-details.html">Palm Grove Escape</a>
                  </h4>
                  <p className="box-text">
                    Find the very best villas with in-depth reviews and ratngs
                    from multiple experts.
                  </p>
                  <a
                    className="th-btn bg-theme pill"
                    href="property-details.html"
                  >
                    Search Villas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesValues;
