import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";
import { useDispatch, useSelector } from "react-redux";
import { allSchoolsListAction } from "../../actions/LandingPageActions.js";

function StickyMenu() {
  const logoUrl = "/assets/images/Touheed-logo.png";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const stickyMenu = document.querySelector(".sticky-menu");

      if (window.scrollY > 160) {
        stickyMenu.classList.add("sticky");
      } else {
        stickyMenu.classList.remove("sticky");
      }
    });
  });
  const dispatch = useDispatch();

  const {
    allschools,
    // loading: schoolLoading,
    // error: errorMsg,
  } = useSelector((state) => state.allSchoolsList);

  useEffect(() => {
    dispatch(allSchoolsListAction());
  }, [dispatch]);

  return (
    <Styles>
      {/* Sticky Menu */}
      <section className="sticky-menu">
        <Styles>
          <section className="logo-area2 sticky-logo-area">
            <Container>
              <Row>
                <Col md="3">
                  <div className="logo">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <img
                        // src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                        src={logoUrl}
                        alt=""
                        className="header-logo"
                      />
                    </Link>
                  </div>
                </Col>
                <Col md="9">
                  <div className="menu-box d-flex justify-content-end mt-4">
                    <ul className="nav menu-nav">
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-toggle"
                          to={process.env.PUBLIC_URL + "/"}
                          data-toggle="dropdown"
                        >
                          Home<i className="las"></i>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to={process.env.PUBLIC_URL + "/"}
                          data-toggle="dropdown"
                        >
                          About Us<i className="las la-angle-down"></i>
                        </Link>
                        <ul className="dropdown list-unstyled">
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to={process.env.PUBLIC_URL + "/about"}
                            >
                              Overview
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to={process.env.PUBLIC_URL + "/management"}
                            >
                              Board of Management
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-toggle"
                          to={process.env.PUBLIC_URL + "/"}
                          data-toggle="dropdown"
                        >
                          Admission<i className="las"></i>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to={process.env.PUBLIC_URL + "/"}
                          data-toggle="dropdown"
                        >
                          Institutions<i className="las la-angle-down"></i>
                        </Link>
                        <ul className="dropdown list-unstyled">
                          {allschools?.rows?.map((names) => (
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to={`/schooldetail/${names.id}`}
                              >
                                {names.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to={process.env.PUBLIC_URL + "/"}
                          data-toggle="dropdown"
                        >
                          Activites<i className="las la-angle-down"></i>
                        </Link>
                        <ul className="dropdown list-unstyled">
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to={process.env.PUBLIC_URL + "/events"}
                            >
                              Events
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-toggle"
                          to={"/contact-us"}
                          data-toggle="dropdown"
                        >
                          Contact Us<i className="las"></i>
                        </Link>
                      </li>
                    </ul>

                    <div className="apply-btn">
                      <Link to={process.env.PUBLIC_URL + "/registration"}>
                        <i className="las la-clipboard-list"></i>Apply Now
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Styles>
      </section>
    </Styles>
  );
}

export default StickyMenu