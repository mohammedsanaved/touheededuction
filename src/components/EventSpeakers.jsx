import React from "react";
import { Styles } from "./styles/EventSpeaker";
import { Row, Col } from "react-bootstrap";

const EventSpeakers = ({ speakers }) => {
  return (
    <Styles>
      <div className="eventDetail_main">
        <h2 className="fw-bold d-flex align-content-center justify-content-center event-speaker-title">
          Event Speakers / Guests
        </h2>

        <div className="d-flex justify-content-center event-speakers-guests">
          {speakers?.map((guest) => (
            <div className="card-main-div" key={guest.id}>
              <div className="img-div">
                <img
                  src={
                    `${process.env.REACT_APP_API_URL}/${guest.image}` ||
                    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_NZykul07nU3cliFuRZQr4_q-gOdkRTmRA&usqp=CAU`
                  }
                  alt={guest.name}
                  className="speakerImg"
                />
              </div>
              <div className="speakerDetails">
                <p className="speaker-name">{guest.name}</p>
                <p className="speaker-details">{guest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
};

export default EventSpeakers;
