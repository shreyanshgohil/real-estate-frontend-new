import Layout from "@/components/Layout";
import Hero from "@/components/Pages/Home/Hero";
import PropertyType from "@/components/Pages/Home/PropertyType";

const index = () => {
  return (
    <Layout>
      <Hero />
      <PropertyType />
    </Layout>
  );
};

export default index;
