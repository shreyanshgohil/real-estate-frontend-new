import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row  justify-content-between align-items-center gy-2">
          <div className="col-auto">
            <div className="header-links">
              <ul>
                <li>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  <a href="mailto:infomailexample@mail.com">
                    infomailexample@mail.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>{" "}
                  <a href="tel:+0012345678900">+00 (123) 456 789 00</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-auto">
            <div className="header-links">
              <ul>
                <li>
                  <div className="th-social">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
