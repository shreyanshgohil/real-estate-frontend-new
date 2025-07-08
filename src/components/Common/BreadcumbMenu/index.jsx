import React from "react";

const BreadCumMenu = (props) => {
  const { breadCumData } = props;

  return (
    <div
      className="breadcumb-wrapper "
      data-bg-src="/images/bg/breadcrumb-bg.jpg"
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{breadCumData.page}</h1>
          <ul className="breadcumb-menu">
            <li>
              <a href={breadCumData.baseUrl}>{breadCumData.base}</a>
              <i class="fa-regular fa-angle-right breadcumb-angle-right" />
            </li>
            <li>{breadCumData.title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCumMenu;
