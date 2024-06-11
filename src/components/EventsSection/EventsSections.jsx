import React from "react";
import EventCarousel from "../EventCarousel";
import { Container } from "react-bootstrap";
import { Styles } from "./styles/EventsSections";

const EventsSections = () => {
  return (
    <Styles>
      <Container>
        <article className="eventSection_main">
          <div className="">
            <EventCarousel />
          </div>
          <div className="eventSection_data">
            <div className="eventSection_title">Title is here</div>
            <div className="eventSection_details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              commodi odit repudiandae mollitia. Itaque, maiores! Debitis fugit
              id cum corrupti, ut magnam dolore unde. In numquam quaerat
              laboriosam placeat ad accusantium ipsum, voluptatem non similique
              atque repellendus, error exercitationem velit.
            </div>
          </div>
        </article>
      </Container>
    </Styles>
  );
};

export default EventsSections;
