import React from "react";

const LatestProperties = () => {
  return (
    <section class="popular-sec-1 space">
      <div class="container">
        <div class="row justify-content-lg-between justify-content-center align-items-center mb-35">
          <div class="col-lg-6">
            <div class="title-area text-left mb-0">
              <p
                class="sub-title fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {" "}
                <span class="double-line"></span> Latest Properties
              </p>
              <h2
                class="sec-title mb-4 fadeinup wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                Featured Properties
              </h2>
            </div>
          </div>
          <div class="col-lg-auto">
            <div
              class="filter-menu style-2 indicator-active filter-menu-active mt-0 mb-0 fadeinup wow"
              data-wow-duration="1.3s"
              data-wow-delay="0.1s"
            >
              <button
                data-filter="*"
                class="th-btn tab-btn active"
                type="button"
              >
                View All
              </button>
              <button data-filter=".cat1" class="th-btn tab-btn" type="button">
                Apartment
              </button>
              <button data-filter=".cat2" class="th-btn tab-btn" type="button">
                Commercial
              </button>
              <button data-filter=".cat3" class="th-btn tab-btn" type="button">
                Land or Plot
              </button>
              <button data-filter=".cat4" class="th-btn tab-btn" type="button">
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
