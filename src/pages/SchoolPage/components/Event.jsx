import React from "react";
import { Styles } from "../styles/Event";
// import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";

const Event = ({ item }) => {
  // const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = { day: "numeric", month: "long", year: "numeric" };

    const formattedDate = date.toLocaleDateString("en-GB", options);

    return formattedDate;
  };
  const formattedDate = formatDate(item.date);

  const formatTimeTo12Hour = (timeString) => {
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
      hour12: true, // Set to true for 12-hour format
    });

    return formattedTime;
  };
  const formattedTime = formatTimeTo12Hour(item.time);
  console.log(formattedTime);

  return (
    <Styles>
      <div className="d-flex single-event-div-container justify-content-center">
        <img
          src={`${process.env.REACT_APP_API_URL}/${item.thumbnail}`}
          alt=""
          className="event-img"
        />
        <div className="event-div-container d-flex">
          <div className="first-col">
            <div className="d-flex mt-1 gap-4 align-content-center title-date">
              <button className="event-details-btn">{formattedDate}</button>
              <h2
                className="single-event-event-title"
                // onClick={() => navigate(`event-details/${item.id}`)}
              >
                {item.title}
              </h2>
            </div>
            <div className="d-flex event-icons-div align-items-center">
              {/* <img src="/assets/images/ion_time-outline.png" alt="" /> */}
              <IoTimeSharp size={20} color="rgba(4, 156, 80, 1)"/>
              &nbsp; {formattedTime}
              {/* <img
                src="/assets/images/carbon_location.png"
                alt=""
                className="event-location-icon"
              /> */}
              <FaLocationDot size={20} color="rgba(4, 156, 80, 1)"/>
              {item.location}
            </div>
            <p className="single-event-text">{item.desc}</p>
          </div>

          {/* <div className="second-col d-flex flex-column">
            <h2 className="single-event-event-date">20 Jan</h2>
            <button className="event-details-btn">DETAILS</button>
          </div> */}
        </div>
      </div>
    </Styles>
  );
};

export default Event;
