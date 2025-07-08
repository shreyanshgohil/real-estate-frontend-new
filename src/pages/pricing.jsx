import BreadCumMenu from "@/components/Common/BreadcumbMenu";
import Video from "@/components/Common/Video";
import Layout from "@/components/Layout";
import FAQ from "@/components/Pages/Home/FAQ";
import PricingPlan from "@/components/Pages/Pricing/PricingPlan";
import { animationMoving } from "@/utils/animation";
import { useLayoutEffect } from "react";

const Pricing = () => {
  useLayoutEffect(() => {
    animationMoving();
  }, []);
  const breadCumData = {
    title: "Pricing Table",
    page: "Pricing Table",
    baseUrl: "/",
    base: "Home",
  };

  return (
    <Layout>
      <BreadCumMenu breadCumData={breadCumData} />
      <PricingPlan />
      <Video />
      <FAQ />
    </Layout>
  );
};

export default Pricing;
