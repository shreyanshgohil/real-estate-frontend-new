import React from "react";

const BreadCumMenu = (props) => {
  const { breadCumData } = props;

  return (
    <div
      className="breadcumb-wrapper "
      data-bg-src="/images/bg/breadcrumb-bg.jpg"
    >
      <div class="container">
        <div class="breadcumb-content">
          <h1 class="breadcumb-title">{breadCumData.page}</h1>
          <ul class="breadcumb-menu">
            <li>
              <a href={breadCumData.baseUrl}>{breadCumData.base}</a>
            </li>
            <li>{breadCumData.title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCumMenu;
