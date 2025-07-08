import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import Layout from "@/components/Layout";
import BlogGrid from "@/components/Pages/Blog/BlogGrid";
import { animationMoving } from "@/utils/animation";
import { useLayoutEffect } from "react";
const index = () => {
  const breadCumData = {
    title: "Blog Grid",
    page: " Blog Grid",
    baseUrl: "/",
    base: "Home",
  };
  useLayoutEffect(() => {
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
