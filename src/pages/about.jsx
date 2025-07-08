import About from "@/components/Common/About";
import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import Counter from "@/components/Common/Counter";
import Layout from "@/components/Layout";
import SignatureFeatures from "@/components/Pages/About/SignatureFeatures";
import PillarAgents from "@/components/Pages/Home/PillarAgents";
import Testimonials from "@/components/Pages/Home/Testimonials";
import { animatingTextCircle, animationMoving } from "@/utils/animation";
import { useLayoutEffect } from "react";

const index = () => {
  useLayoutEffect(() => {
    animationMoving();
    animatingTextCircle();
  }, []);

  const breadCumData = {
    title: "About Us",
    page: "About Us",
    baseUrl: "/",
    base: "Home",
  };
  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <About />
      <SignatureFeatures />
      <PillarAgents />
      <Counter />
      <Testimonials />
    </Layout>
  );
};

export default index;
