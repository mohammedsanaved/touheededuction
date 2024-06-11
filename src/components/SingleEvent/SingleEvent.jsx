import React from "react";
import { SingleEventStyles } from "./SingleEventStyles.js";
import { Link } from "react-router-dom";
import { IoTimeSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";



const formatDate = (dateString) => {
 
  const date = new Date(dateString);
  
  
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  
  
  const formattedDate = date.toLocaleDateString('en-GB', options);
  
  return formattedDate;
};




const SingleEvent = ({ event }) => {
  const thumbnail = `${process.env.REACT_APP_API_URL}/${event.thumbnail}`;



  const formattedDate = formatDate(event.date);
  const formatTimeTo12Hour = (timeString) => {
    if (!timeString) return ""; // Handle case where timeString is undefined

    // Parse the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(":");

    // Create a Date object with the provided time
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(parseInt(seconds, 10));

    // Format the time to 12-hour format
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    return formattedTime;
  };

  const formattedTime = formatTimeTo12Hour(event.time);

  return (
    <SingleEventStyles className="w-100">
      <div className="d-flex single-event-div-container justify-content-center w-100">
        <img
          src={thumbnail}
          //   src="../assets/images/SingleEventPlaceholder.png"
          alt={event.title}
          className="thumbnail_img"
        />
        <div className="event-div-container d-flex">
          <div className="first-col">
            <h2 className="single-event-event-title">{event.title}</h2>
            <div className="d-flex event-icons-div align-items-center">
            <IoTimeSharp size={20} color="rgba(4, 156, 80, 1)"/>
              {/* <img
                src="./assets/images/ion_time-outline.png"
                alt=""
                className="event-time-icon"
              /> */}
              <div>{formattedTime}</div>
              <FaLocationDot size={20} color="rgba(4, 156, 80, 1)"/>
              {/* <img
                src="./assets/images/carbon_location.png"
                alt=""
                className="event-location-icon"
              /> */}
              <div>{event.location}</div>
            </div>
            <p className="single-event-text">{event.desc}</p>
          </div>

          <div className="second-col d-flex flex-column">
            <h2 className="single-event-event-date">{formattedDate}</h2>
            <Link to={`/event-details/${event.id}`}>
              <button className="event-details-btn">DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
    </SingleEventStyles>
  );
};

export default SingleEvent;
