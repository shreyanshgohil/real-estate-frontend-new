import Layout from "@/components/Layout";
import About from "@/components/Pages/Home/About";
import Hero from "@/components/Pages/Home/Hero";
import LatestProperties from "@/components/Pages/Home/LatestProperties";
import PropertyType from "@/components/Pages/Home/PropertyType";
import WhatWeDo from "@/components/Pages/Home/WhatWeDo";

const index = () => {
  return (
    <Layout>
      <Hero />
      <PropertyType />
      <About />
      <WhatWeDo />
      <LatestProperties />
    </Layout>
  );
};

export default index;
