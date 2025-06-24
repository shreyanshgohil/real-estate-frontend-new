import Image from "next/image";
import React from "react";

const Counter = () => {
  return (
    <div>
      <div
        className="counter-sec1 space overflow-hidden"
        data-bg-src="/images/bg/counter-1-bg.jpg"
      >
        <div className="container">
          <div className="counter-card-wrap">
            <div className="counter-card fadeinup wow">
              <div className="box-icon">
                <Image
                  src="/images/icons/counter_1_1.svg"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="media-body">
                <h4 className="box-number">
                  <span className="counter-number"> 1950 </span>
                  <span className="plus-simple">+</span>
                </h4>
                <p className="box-text">Project Handover</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="counter-card fadeinup wow">
              <div className="box-icon">
                <Image
                  src="/images/icons/counter_1_1.svg"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="media-body">
                <h4 className="box-number">
                  <span className="counter-number"> 2 </span>
                  <span className="plus-simple">m</span>
                </h4>
                <p className="box-text">Monthly Visitors</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="counter-card fadeinup wow">
              <div className="box-icon">
                <Image
                  src="/images/icons/counter_1_1.svg"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="media-body">
                <h4 className="box-number">
                  <span className="counter-number"> 850 </span>
                  <span className="plus-simple">+</span>
                </h4>
                <p className="box-text">Property Ready</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="counter-card fadeinup wow">
              <div className="box-icon">
                <Image
                  src="/images/icons/counter_1_1.svg"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="media-body">
                <h4 className="box-number">
                  <span className="counter-number"> 98 </span>
                  <span className="plus-simple">%</span>
                </h4>
                <p className="box-text">Happy Customers</p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
