import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Styles } from "./styles/Cards";
import { Link } from "react-router-dom";

const CardFlip = ({ school }) => {
  const [flip, setFlip] = useState(true);
  const cardImage = `${process.env.REACT_APP_API_URL}`;
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };
  return (
    <Styles>
      <div className="App" onClick={() => setFlip((prevState) => !prevState)}>
        <motion.div
          style={{ width: "334px", height: "446px" }}
          // style={{ width: "auto", height: "auto" }}
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className="Card"
          >
            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip ? 0 : 180 }}
              className="front"
            >
              <div style={{ backgroundImage: `${cardImage}/${school.image}` }}>
                <img
                  src={`${cardImage}/${school.image}`}
                  alt="Alt"
                  className="image"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip ? 180 : 0 }}
              transition={{ duration: 0.7 }}
              className="back"
            >
              <div className="Back">
                <span className="schoolLocation">{school.location}</span>
                
                  <div className="cards-school-name">{school.name}</div>
                  
                    <p className="cards-description">
                      {truncateText(`${school.description}`, 20)}
                    </p>
                    <div className="d-flex justify-content-evenly gap-2 mb-5">
                      <Link to={`/schooldetail/${school.id}`}>
                        <button className="ReadMore">Read More</button>
                      </Link>
                      <button className="ContactUs">Contacts Us</button>
                    </div>
                  
                
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Styles>
  );
};

export default CardFlip;
