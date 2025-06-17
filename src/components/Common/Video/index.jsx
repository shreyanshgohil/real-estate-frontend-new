import React from "react";

const Video = () => {
  return (
    <div className="price-video-sec space-bottom overflow-hidden" id="gallery">
      <div className="container">
        <div
          className="price-video-wrapper"
          data-bg-src="/images/hero/hero_bg_1_1.jpg"
        >
          <div className="gallery-video-wrap">
            <div className="video-box1">
              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="play-btn popup-video"
              >
                <i className="fa-sharp fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
