import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { aboutUsAction } from "../actions/LandingPageActions.js";
import ModalVideo from "react-modal-video";
import { Styles } from "./styles/aboutUs.js";
import video from "../assets/schoolVideo.mp4";
import GreenButton from "./GreenButton/GreenButton.jsx";
import landingPageVideo from "../assets/landingPage.mp4";

const AboutUs = () => {
  const dispatch = useDispatch();
  const aboutUs = useSelector((state) => state.aboutUs);
  const { aboutus, loading, error } = aboutUs;

  useEffect(() => {
    dispatch(aboutUsAction());
  }, [dispatch]);

  return (
    <Styles>
      <section className="about-us-section mx-auto">
        {/* Show loading spinner if data is loading */}
        {loading && <div>Loading...</div>}

        {/* Show error message if there's an error */}
        {error && <div>Error: {error}</div>}

        {/* Render data if available */}
        {aboutus?.data?.map((item, i) => (
          <React.Fragment key={i}>
            <div className="about-video">
              <video
                className="about-us-vid"
                autoPlay
                loop
                controls
                playsInline
              >
                <source
                  type="video/mp4"
                  // src={`${process.env.REACT_APP_API_URL}/${item.videos}`}
                  src={landingPageVideo}
                />
              </video>
            </div>
            <div className="about-content">
              <h4 className="about-title">About Us</h4>
              <p className="about-para">{item.desc}</p>
              <Link
                className="readmore-btn"
                to={`${process.env.PUBLIC_URL}/about`}
              >
                <GreenButton text="Read More" />
              </Link>
            </div>
          </React.Fragment>
        ))}
      </section>
      {/* <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url={video}
        onClose={() => setIsOpen(false)}
      /> */}
    </Styles>
  );
};

export default AboutUs;