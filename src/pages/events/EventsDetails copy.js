import React, { Component } from "react";
import Datas from "../../data/event/details.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "react-compound-timer";
import HeaderTwo from "../../components/HeaderTwo";
// import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import PopularCourse from "../courses/components/PopularCourse";
import CourseTag from "../courses/components/CourseTag";
import FooterTwo from "../../components/FooterTwo";
import Footer from "../../components/Footer";
import { Styles } from "./styles/eventDetails.js";

import ReactHtmlParser from "react-html-parser";

// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { detailEvent } from "../../actions/eventActions";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Datasimg from "../../data/shop/details.json";

import Loader from "../../components/Loader";
import Message from "../../components/Message";

function EventDetails({ match }) {
  // const settings = {
  //   showArrows: false,
  //   showStatus: false,
  //   showIndicators: false,
  // };

  // const dispatch = useDispatch();
  // const eventDetail = useSelector((state) => state.eventDetail);
  // const { loading, event, error } = eventDetail;
  // console.log(event, match);
  // useEffect(() => {
  //   dispatch(detailEvent(match.params.id));
  // }, [dispatch, match]);
  // let str = "Hello world!";
  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper event-details-page">
        {/* Header 2 */}
        <HeaderTwo />

        {/* Breadcroumb */}
        {/* <BreadcrumbBox title="Event Details" /> */}

        {/* Event Details Area */}
        <section className="event-details-area">
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Container>
              <Row>
                <Col md="12"></Col>
              </Row>

              <Row>
                <Col lg="9" md="8" sm="12">
                  <div className="event-details-content">
                    <div className="heading">
                      <h4> {event.event_title}</h4>
                    </div>
                    <div className="event-icon">
                      <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          <i className="las la-calendar"></i> {event.date}
                        </li>
                        <li className="list-inline-item">
                          <i className="las la-clock"></i> {event.time}
                        </li>
                        <li className="list-inline-item">
                          <i className="las la-map-marker"></i>{" "}
                          {event.event_location}
                        </li>
                        {/* <li className="list-inline-item"><i className="las la-copy"></i> Independence Day</li> */}
                      </ul>
                    </div>
                    <div className="event-details-banner">
                      <div className="product-slider">
                        <Carousel {...settings}>
                          {event.all_images
                            ? event.all_images.map((data, i) => (
                                <div className="slider-item" key={i}>
                                  <img
                                    src={
                                      process.env.REACT_APP_API_URL +
                                      data.images
                                    }
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                              ))
                            : ""}
                        </Carousel>
                      </div>
                    </div>
                    <div className="event-details-overview">
                      <h5>Event Overview</h5>

                      {ReactHtmlParser(event.event_desc)}

                      {/* <p>The Touheed campus witnessed a grand celebration of our 72nd Independence Day on Wednesday, 15th August 2018. The tri-color was unfurled by the Chief Guest Mr. Mohammad Meeran Shahbuddin, at the school grounds. National Anthem and patriotic songs were rendered by the students. Later the programme was shifted to the auditorium.<br />
                                            <br />Mr. Imtiyaz Ahmed Kazi (Correspondent) presided over the programme. Mr. Fatah MH, Hafiz Ikram Shahbuddin and Mr. Mohammad Murfad Nakhuda (Trustee) were present on the dais.The programme started with ‘Qirat’ by Fawaz Shaikh (X) followed with ‘Hamd’ by Ayesha Midhat (X) and ‘Na’th’ by Zarqa Zainab(IX).
                                            <span><i className="las la-quote-right"></i>During the glittering programme the students displayed their talents and presented patriotic songs, speeches and entertained the gathering by some ‘Shairies’ amidst thundering applause
                                            </span>Hafiz Sibgatullah supplicated to the Almighty Allah… </p>
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-check"></i> Ms. Rehana Abdul Hameed – Principal of the Touheed Girls PU College, Shabana Firdaus (HM) spoke on the occasion.</li>
                                                <li><i className="fa fa-check"></i> Ms. Poornima Shet welcomed. Ms. Zeeba Mehreen proposed vote of thanks. Ms. Fatima Sana anchored.</li>
                                            </ul> */}
                    </div>
                    {/* <div className="event-details-speaker">
                                            <h5>Event Speakers</h5>
                                            <Row>
                                                {
                                                    Datas.map((data, i) => (
                                                        <Col lg="3" md="6" sm="6" key={i}>
                                                            <div className="event-speaker-item">
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.personImage}`} alt="" className="img-fluid" />
                                                                <div className="img-content text-center">
                                                                    <h6>{data.personName}</h6>
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.facebook}><i className="fab fa-facebook-f"></i></a></li>
                                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.twitter}><i className="fab fa-twitter"></i></a></li>
                                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.youtube}><i className="fab fa-youtube"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    ))
                                                }
                                            </Row>
                                        </div> */}

                    {/* <div className="pre-nxt-event">
                                            <Row>
                                                <Col md="6">
                                                    <div className="next-prev-item prev-event d-flex">
                                                        <div className="prev-img">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/blog-2.jpeg`} alt="" />
                                                        </div>
                                                        <div className="prev-text">
                                                            <p><Link to={process.env.PUBLIC_URL + "/event-details"}>A session on Career Guidance.</Link></p>
                                                            <span> March 27, 2020</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="next-prev-item next-event d-flex flex-row-reverse text-right">
                                                        <div className="next-img">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/blog-3.jpeg`} alt="" />
                                                        </div>
                                                        <div className="next-text">
                                                            <p><Link to={process.env.PUBLIC_URL + "/event-details"}>Prestigious ISO Certificate awarded to Touheed.</Link></p>
                                                            <span> March 27, 2020</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div> */}
                  </div>
                </Col>

                <Col lg="3" md="4" sm="12">
                  {/* <div className="event-details-sidebar">
                                        <Row>
                                            <Col md="12">
                                                <div className="event-sidebar-info">
                                                    <div className="event-sidebar-timer text-center">
                                                        <Timer initialTime={1040 * 970 * 980} direction="backward">
                                                            <p><Timer.Days /><span>Days</span></p>
                                                            <p><Timer.Hours /><span>Hours</span></p>
                                                            <p><Timer.Minutes /><span>Minutes</span></p>
                                                        </Timer>
                                                    </div>
                                                    <ul className="list-unstyled event-info-list">
                                                        <li>Start Date: <span>Aug 21, 2020</span></li>
                                                        <li>Time: <span>08:30am</span></li>
                                                        <li>Seat: <span>220</span></li>
                                                        <li>Place: <span>Ontario,CA</span></li>
                                                        <li>Organizer: <span>David Young</span></li>
                                                        <li>Phone: <span>+1 (396) 486 4709</span></li>
                                                        <li>Email: <span>email@me.com</span></li>
                                                        <li>Website: <span>www.mydomain.com</span></li>
                                                    </ul>
                                                    <button type="button" className="buy-btn">Buy Ticket</button>
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <PopularCourse />
                                            </Col>
                                            <Col md="12">
                                                <CourseTag />
                                            </Col>
                                        </Row>
                                    </div>
                                */}
                </Col>
              </Row>
            </Container>
          )}
        </section>

        {/* Footer 2 */}
        <Footer />
      </div>
    </Styles>
  );
}

export default EventDetails;
