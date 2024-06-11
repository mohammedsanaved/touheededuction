import React, { useState, useEffect, Component } from "react";
import Datas from "../data/footer/footer.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BackToTop from "./common/BackToTop";
import { Styles } from "./styles/footerOne.js";

import { useSelector, useDispatch } from "react-redux";
import { listEvent } from "../actions/eventActions";

const Footer = () => {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { error, loading, event, page, pages } = eventList;

  useEffect(() => {
    dispatch(listEvent());
  }, [dispatch]);

  return (
    <Styles>
      {/* Footer Area */}
      <footer
        className="footer1"
        // style={{
        //   backgroundImage: `url(assets/images/${
        //     process.env.PUBLIC_URL + Datas.backgroundImage
        //   })`,
        // }}
      >
        <Container>
          <Row>
            <Col md="4">
              <div className="footer-logo-info">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/f-logo.jpeg"}
                  alt=""
                  className="img-fluid"
                  width="342"
                  height="82"
                />
                <p>
                  Touheed Educational Trust (R) is a private charitable and
                  minority educational institution recognized by the Govt. of
                  Karnataka.{" "}
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="las la-map-marker"></i>Gangolli, udupi dist,
                    karnataka.
                  </li>
                  <li>
                    <i className="las la-envelope"></i>info@touheed.education
                  </li>
                  <li>
                    <i className="las la-phone"></i>+91 999 999 9999
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4">
              <div className="f-links">
                <h5>Useful Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>General Info
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>Online Support
                    </Link>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>General Info
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right"></i>Online Support
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4">
              <div className="f-post">
                <h5>Recent Post</h5>
                {event?.map((data, i) =>
                  i < 3 ? (
                    <div className="post-box d-flex">
                      <div className="post-img">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/images/blog-2.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="post-content">
                        <Link to={process.env.PUBLIC_URL + "/blog-details"}>
                          {data.event_title}
                        </Link>
                        <span> {data.date} </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Copyright Area */}
      <section className="copyright-area">
        <Container>
          <Row>
            <Col md="6">
              <div className="copy-text">
                <p>
                  Copyright &copy; 2020 | Designed With{" "}
                  <i className="las la-heart"></i> by{" "}
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abdul Waheed
                  </a>
                </p>
              </div>
            </Col>
            <Col md="6" className="text-right">
              <ul className="social list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        {/* Back To Top */}
        <BackToTop />
      </section>
    </Styles>
  );
};

export default Footer;
