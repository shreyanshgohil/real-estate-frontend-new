import Layout from "@/components/Layout";
import About from "@/components/Common/About";
import ExploreCities from "@/components/Pages/Home/ExploreCities";
import FAQ from "@/components/Pages/Home/FAQ";
import FeaturedPropertiesLarge from "@/components/Pages/Home/FeaturedPropertiesLarge";
import Hero from "@/components/Pages/Home/Hero";
import LatestNews from "@/components/Pages/Home/LatestNews";
import LatestProperties from "@/components/Pages/Home/LatestProperties";
import PillarAgents from "@/components/Pages/Home/PillarAgents";
import PropertiesValues from "@/components/Pages/Home/PropertiesValues";
import PropertyType from "@/components/Pages/Home/PropertyType";
import Testimonials from "@/components/Pages/Home/Testimonials";
import WhatWeDo from "@/components/Pages/Home/WhatWeDo";
import { useEffect } from "react";
import { animatingTextCircle, animationMoving } from "@/utils/animation";

const index = () => {
  useEffect(() => {
    animationMoving();
    animatingTextCircle();
  }, []);

  return (
    <Layout>
      <Hero />
      <PropertyType />
      <About />
      <WhatWeDo />
      <LatestProperties />
      <ExploreCities />
      <PropertiesValues />
      <PillarAgents />
      <FeaturedPropertiesLarge />
      <Testimonials />
      <FAQ />
      <LatestNews />
    </Layout>
  );
};

export default index;
