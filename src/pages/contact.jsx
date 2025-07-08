import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import Layout from "@/components/Layout";
import ContactArea from "@/components/Pages/Contact/ContactArea";
import ContactForm from "@/components/Pages/Contact/ContactForm";
import { animationMoving } from "@/utils/animation";
import Image from "next/image";
import { useLayoutEffect } from "react";
const contact = () => {
  const breadCumData = {
    title: "Contact",
    page: " Contact with Us",
    baseUrl: "/",
    base: "Home",
  };

  useLayoutEffect(() => {
    animationMoving();
  }, []);
  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <ContactArea />
      <ContactForm />
      <div className="space-top">
        <div className="container-fluid p-0">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <div className="contact-icon">
              <Image
                src="/images/icons/con-location-dot.svg"
                width={48}
                height={65}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
