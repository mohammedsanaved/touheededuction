import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

const EventDetailsData = ({ location, time, date, desc, name }) => {
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

  const formattedTime = formatTimeTo12Hour(time);
  return (
    <div>
      <h1 className="event-detail-title">{name}</h1>
      <div className="d-flex gap-4 justify-content-md-start mt-2 flex-wrap">
        <div className="d-flex gap-2">
          {" "}
          {/* Apply text-success class for success color */}
          <FaCalendarAlt className="fs-4 fw-semibold text-success" />
          <p className="fs-5">{date}</p>
        </div>
        <div className="d-flex gap-2 ">
          {/* Apply text-success class for success color */}
          <CiClock2 className="fs-4 text-success fw-semibold" />
          <p className="fs-5">{formattedTime}</p>
        </div>
        <div className="d-flex">
          <LuMapPin className="fs-4 text-success" />
          <p className="fs-5">{location}</p>
        </div>
      </div>
      <p className="event-detail-desc">{desc}</p>
    </div>
  );
};

export default EventDetailsData;
