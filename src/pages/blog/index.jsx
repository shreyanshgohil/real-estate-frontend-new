import Layout from "@/components/Layout";
import React from "react";
import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import BlogGrid from "@/components/Pages/Blog/BlogGrid";
const index = () => {
  const breadCumData = {
    title: "Blog Grid",
    page: " Blog Grid",
    baseUrl: "/",
    base: "Home",
  };
  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <BlogGrid />
    </Layout>
  );
};

export default index;
