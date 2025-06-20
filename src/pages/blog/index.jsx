import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import BlogGrid from "@/components/Pages/Blog/BlogGrid";
import { animationMoving } from "@/utils/animation";
const index = () => {
  const breadCumData = {
    title: "Blog Grid",
    page: " Blog Grid",
    baseUrl: "/",
    base: "Home",
  };
  useEffect(() => {
    animationMoving();
  }, []);
  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <BlogGrid />
    </Layout>
  );
};

export default index;
