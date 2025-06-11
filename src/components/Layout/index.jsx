import React from "react";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <AnnouncementBar />
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
