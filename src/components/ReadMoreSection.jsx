import React, { useState } from "react";
import Datas from "../data/about-us/about-us.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import { Styles } from "./styles/aboutUs.js";

const ReadMoreSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };


  const sectionStyle = {
    maxWidth:'1154px',
    
  };


  return (
    <Styles>
      {/* Read More */}
      <section className="about-us mx-auto" style={sectionStyle}>
        <Container>
          <Row>
            <Col md="6">
              <div className="about-image">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/images/${Datas.mainImage}`
                  }
                  className="main-img"
                  alt=""
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/pattern.png"}
                  className="pattern-img"
                  alt=""
                />
                <div
                  className="video-player"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.videoBackground})`,
                  }}
                >
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="uXFUl0KcIkA"
                    onClose={() => setIsOpen(false)}
                  />
                  <button onClick={openModal} className="play-button">
                    <i className="las la-play"></i>
                  </button>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="about-content">
                <h4 className="about-title">{Datas.title}</h4>
                <p className="about-para">
                  {Datas.desc1}
                  <span>{Datas.desc2}</span>
                </p>
                
                <Link
                  className="readmore-btn"
                  to={process.env.PUBLIC_URL + "/about"}
                >
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default ReadMoreSection;
