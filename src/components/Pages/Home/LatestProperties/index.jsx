import React from "react";

const LatestProperties = () => {
  return (
    <section className="popular-sec-1 space">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center mb-35">
          <div className="col-lg-6">
            <div className="title-area text-left mb-0">
              <p
                className="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span className="double-line"></span> Latest Properties
              </p>
              <h2
                className="sec-title mb-4 fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Featured Properties
              </h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div
              className="filter-menu style-2 indicator-active filter-menu-active mt-0 mb-0 fadeinup wow"
              data-wow-duration="1.3s"
              data-wow-delay="0.1s"
            >
              <button
                data-filter="*"
                className="th-btn tab-btn active"
                type="button"
              >
                View All
              </button>
              <button
                data-filter=".cat1"
                className="th-btn tab-btn"
                type="button"
              >
                Apartment
              </button>
              <button
                data-filter=".cat2"
                className="th-btn tab-btn"
                type="button"
              >
                Commercial
              </button>
              <button
                data-filter=".cat3"
                className="th-btn tab-btn"
                type="button"
              >
                Land or Plot
              </button>
              <button
                data-filter=".cat4"
                className="th-btn tab-btn"
                type="button"
              >
                Farm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProperties;
