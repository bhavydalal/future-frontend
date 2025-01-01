import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Future was born out of a vision for innovation and a determination
            to redefine the online shopping experience. Our journey began with a
            clear purpose: to create a platform where customers can effortlessly
            explore, discover, and shop for a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we have been committed to curating a diverse
            collection of high-quality products that suit every lifestyle and
            preference. From cutting-edge electronics and stylish fashion to
            home essentials and beauty products, Future offers an extensive
            range sourced from trusted brands and reliable suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Future, our mission is to empower our customers with unparalleled
            choice, convenience, and confidence. We strive to deliver a seamless
            shopping experience that exceeds expectations at every step—from
            browsing and ordering to fast, reliable delivery and exceptional
            after-sales support.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* <NewsletterBox /> */}
    </div>
  );
};

export default About;
