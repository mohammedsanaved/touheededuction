/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Styles } from "../styles/Brouchers";
import GreenButton from "../../../components/GreenButton/GreenButton";
import { FaBookOpen } from "react-icons/fa6";

const Brouchers = ({ doc }) => {
  const brochurelogo = "/assets/images/BrochureLogo.png";

  return (
    <Styles>
      <div className="mt-4">
        <div className="text-center mb-5 brochure-header">
          Go through our Brochures
        </div>
        <div className="brochure-bg rounded-4  mx-auto">
          <div className="mx-auto d-flex justify-center">
          <FaBookOpen size={50} color="#0CAD6C" className="mx-auto brochure-img"/>
            {/* <img
              src={`${brochurelogo}`}
              alt=""
              className="mx-auto brochure-img"
            /> */}
          </div>
          <div className="brochure-text align-items-center align-content-center mx-auto">
            {doc.description}
          </div>
          <div className="school-buttons d-flex justify-content-center mx-auto">
            <a
              href={`${process.env.REACT_APP_API_URL}/${doc.pdf}`}
              download={`${process.env.REACT_APP_API_URL}/${doc.pdf}`}
              title={"Download the Brochure"}
              target={"_blank"}
            >
              <button className="know-more-btn">Download</button>
            </a>
            {/* <GreenButton text="Know More" class_Name="know-more-btn" /> */}
            {/* <GreenButton text="Enquire Now" class_Name="enquire-now-btn" /> */}
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Brouchers;
