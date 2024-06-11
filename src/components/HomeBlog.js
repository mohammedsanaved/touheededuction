import React from "react";
import Datas from "../data/blog/home-blog.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./styles/homeBlog.js";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { listEvent } from "../actions/eventActions";
// import ReactHtmlParser from "react-html-parser";

import Loader from "./Loader";
import Message from "./Message";

function HomeBlog({ eventListData }) {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  console.log(eventList, "------------------->");
  const { error, loading, event, page, pages } = eventList;
  console.log(event, "events from eventList");
  // console.log("eventListData:", eventListData);
  useEffect(() => {
    dispatch(listEvent());
  }, [dispatch]);
  const postLink = "/events/";
  // const { event, loading, error } = eventListData;

  return (
    <Styles>
      {/* Blog Area */}
      <section className="home-blog-area">
        <Container>
          <Row>
            <Col md="12">
              <div className="fs-1 fw-bold mb-4 text-center">
                <h4>Latest Event</h4>
              </div>
            </Col>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              event?.map((data, i) =>
                i < 4 ? (
                  <Col md="6" key={i}>
                    <div className="blog-post">
                      <Row>
                        <Col lg="6" md="12">
                          <div className="blog-img">
                            <Link
                              to={process.env.PUBLIC_URL + postLink + data.id}
                            >
                              <img
                                src={
                                  process.env.REACT_APP_API_URL +
                                  data.event_image
                                }
                                alt=""
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                        </Col>
                        <Col lg="6" md="12">
                          <div className="blog-content">
                            <div className="content-box">
                              <div className="top-content d-flex">
                                <div className="blog-date text-center">
                                  <p>{data.date_abbreviated}</p>
                                </div>
                                <div className="blog-title">
                                  <h6>
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        postLink +
                                        data.id
                                      }
                                    >
                                      {data.event_title}
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="blog-desk">
                                {/* <p>{ReactHtmlParser(data.short_description)}</p> */}
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        postLink +
                                        data.id
                                      }
                                    >
                                      <i className="las la-comment"></i> Read
                                      More..
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                ) : (
                  ""
                )
              )
            )}
          </Row>
        </Container>
      </section>
    </Styles>
  );
}

export default HomeBlog;
