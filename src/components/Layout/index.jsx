import React from "react";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <div>{children}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
