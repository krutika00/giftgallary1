import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
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
          The comfort, the calm and the love. There really is no place like home.
           So when your loved ones move into a new house, it only makes sense to shower them with memorable gifts.
            This hamper includes an assorted chocolate box and a Velvet Cushion which can be personalized with a name.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
