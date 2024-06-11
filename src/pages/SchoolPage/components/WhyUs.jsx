import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import GreenButton from "../../../components/GreenButton/GreenButton";
import '../styles/WhyUs.css';
import { Link } from "react-router-dom";


const EventDetailsData = ({ image, description }) => {
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="d-flex justify-content-between why-us-container mx-auto">
      <div>
        <img
          src={`${process.env.REACT_APP_API_URL}/${image}`}
          alt="school"
          className="why-us-img"
        />
      </div>
      <div>
        <h1 className="why-us-h1">Why Us</h1>

        <p className="why-us-text">{truncateText(`${description}`, 80)}</p>
        <Link to={"/school-about-us"}>
          <GreenButton text="Read More" class_Name="readmore-btn" />
        </Link>
      </div>
    </div>
  );
};

export default EventDetailsData;
