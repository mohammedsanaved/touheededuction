/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection";
import HeaderTwo from "../../components/HeaderTwo";
import { ContactUsPage2Styles } from "./ContactUsPage2Styles";
import BannerSection from "../../components/BannerSection/BannerSection";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2";

const ContactUsPage2 = () => {
  const bg = "./assets/images/eventspageimage.png";

  return (
    <ContactUsPage2Styles>
      <HeaderNew2 />

      <BannerSection bg_image={bg} title={"Home/Events"} />

      <ContactInfoSection />
      <div className="iframe-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62116.72716484159!2d74.70589123950015!3d13.33188879643458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb69938f41cf%3A0xcccc99e431850143!2sUdupi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714818524002!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <FooterNew />
    </ContactUsPage2Styles>
  );
};

export default ContactUsPage2;
