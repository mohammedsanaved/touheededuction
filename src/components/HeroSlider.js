import React from "react";
import Datas from "../data/hero/hero-slider.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { Styles } from "./styles/heroSlider.js";

const HeroSlider = () => {
  const settings = {
    slidesPerView: 1,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    effect: "fade",
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    renderPrevButton: () => (
      <div className="swiper-btn slider-button-prev">
        <i className="flaticon-arrow-left-th"></i>
      </div>
    ),
    renderNextButton: () => (
      <div className="swiper-btn slider-button-next">
        <i className="flaticon-arrow-right-th"></i>
      </div>
    ),
  };

  return (
    <Styles>
      {/* Hero Slider */}
      <section className="hero-slider-area">
        <Swiper {...settings}>
          {Datas.map((data, i) => (
            <div className="slider-item" key={i}>
              <div className="image-container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/images/${data.backgroundImage}`
                  }
                  className="slider-image"
                  alt={data.backgroundImage}
                />
              </div>
              <div className="slider-table">
                <div className="slider-tablecell">
                  <Container>
                    <Row>
                      <Col md="12">
                        <div className={data.uniqClass}>
                          <div className="slider-title">
                            <p>{data.title}</p>
                          </div>
                          <div className="slider-desc">
                            <h1>{data.desc}</h1>
                          </div>
                          <div className="slider-btn">
                            <Link
                              className="slider-btn1"
                              to={
                                process.env.PUBLIC_URL + `/${data.btnOneLink}`
                              }
                            >
                              Our Courses
                            </Link>
                            <Link
                              className="slider-btn2"
                              to={
                                process.env.PUBLIC_URL + `/${data.btnTwoLink}`
                              }
                            >
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          ))}
        </Swiper>
      </section>
    </Styles>
  );
};

export default HeroSlider;
{
  /* <SwiperSlide>
          <img
          src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className=""
          />
          </SwiperSlide>
          <SwiperSlide>
          <img
          src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          />
          </SwiperSlide>
          <SwiperSlide>
          <img
          src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          />
        </SwiperSlide> */
}
{
  /* 
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide> */
}