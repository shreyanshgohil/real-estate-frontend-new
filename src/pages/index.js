import Layout from "@/components/Layout";
import About from "@/components/Pages/Home/About";
import ExploreCities from "@/components/Pages/Home/ExploreCities";
import FAQ from "@/components/Pages/Home/FAQ";
import Hero from "@/components/Pages/Home/Hero";
import LatestNews from "@/components/Pages/Home/LatestNews";
import LatestProperties from "@/components/Pages/Home/LatestProperties";
import PillarAgents from "@/components/Pages/Home/PillarAgents";
import PropertiesValues from "@/components/Pages/Home/PropertiesValues";
import PropertyType from "@/components/Pages/Home/PropertyType";
import Testimonials from "@/components/Pages/Home/Testimonials";
import WhatWeDo from "@/components/Pages/Home/WhatWeDo";

const index = () => {
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
      <Testimonials />
      <FAQ />
      <LatestNews />
    </Layout>
  );
};

export default index;
