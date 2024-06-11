import React from 'react';
import { CardsNewStyles } from "./styles/CardsNew.js";
import { Link } from "react-router-dom";

const CardsNew = ({ school }) => {
    const cardImage = `${process.env.REACT_APP_API_URL}`;
    return (
      <CardsNewStyles>
        <div className="cards-container">
          <div className="cards-location">{school.location.split(",")[0]}</div>
          <div
            className="cards-img"
            style={{ backgroundImage: `url(${cardImage}/${school.image})` }}
          ></div>
          <div className="cards-schoolName">{school.name}</div>
          <div className="cards-schooldescription">{school.description}</div>
          <div className="d-flex justify-content-evenly gap-2 cards-button">
            {console.log(school, "<=======")}
            <Link to={`/schooldetail/${school.slug}`} state={{ id: school.id }}>
              <button className="ReadMore">Read More</button>
            </Link>
            <Link to={"/contact-us"}>
              <button className="ContactUs">Contacts Us</button>
            </Link>
          </div>
        </div>
      </CardsNewStyles>
    );
}

export default CardsNew