import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Ecommerce app, your one-stop destination for a seamless and delightful shopping experience. We are committed to bringing you a wide range of quality products, from everyday essentials to unique finds, all at your fingertips.

Our mission is to make shopping convenient, enjoyable, and accessible to everyone. With a focus on customer satisfaction, we ensure:

A user-friendly platform for browsing, selecting, and purchasing products with ease.
Secure payment options to give you peace of mind with every transaction.
A fast and reliable delivery system to ensure your orders reach you on time.
A dedicated support team to assist you with any inquiries or concerns.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;