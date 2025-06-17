import React from "react";

const ContactArea = () => {
  return (
    <div className="contact-area-2 space-top" id="contact-sec">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4 col-lg-6 contact-feature-wrap">
            <div className="contact-feature">
              <div className="contact-feature-icon">
                <i className="fas fa-location-dot"></i>
              </div>
              <div className="media-body">
                <p className="contact-feature_label">Mosque Address</p>
                <a
                  href="https://www.google.com/maps"
                  className="contact-feature_link"
                >
                  123 Academic Way City, State, 1234, New York City.
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 contact-feature-wrap">
            <div className="contact-feature">
              <div className="contact-feature-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="media-body">
                <p className="contact-feature_label">Phone Number</p>
                <a href="tel:+011123234567890" className="contact-feature_link">
                  +011 (123) 234 567 890
                </a>
                <a href="tel:+09456876543210" className="contact-feature_link">
                  +09 (456) 876 543 210
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 contact-feature-wrap">
            <div className="contact-feature">
              <div className="contact-feature-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="media-body">
                <p className="contact-feature_label">Email Address</p>
                <a
                  href="mailto:info@examplemail.edu"
                  className="contact-feature_link"
                >
                  info@examplemail.edu
                </a>
                <a
                  href="mailto:admission@examplemail.edu"
                  className="contact-feature_link"
                >
                  admission@examplemail.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
