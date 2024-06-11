import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Search from "./common/Search";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import { Styles } from "./styles/header.js";
import logo from "../assets/logo.jpeg";
import { LuMapPin } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";

const Header = () => {
  return (
    <Styles>
      {/* Topbar */}
      <section className="top-bar">
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="bar-left">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <i className="las la-map-marker"></i>
                    {/* <LuMapPin /> */}
                    Alert:
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="10" md="10">
              <div className="bar-right d-flex justify-content-end alert-right">
                <div className="alert-area">
                  <marquee
                    className=""
                    onmouseover="this.stop();"
                    onmouseout="this.start();"
                  >
                    <a className="xatext">
                      "Preparatory holidays for examinations of first semester
                      UG & PG programs shall be from 19 to 24 July 2021"{" "}
                    </a>
                    <a className="xatext">
                      "Guidelines for students appearing for Semester End
                      Offline Examinations UG/PG July - September 2021"{" "}
                    </a>
                  </marquee>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Logo Area */}
      <section className="logo-area">
        <Container>
          <Row>
            <Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                    // src={logo}
                    alt=""
                    width="171"
                    height="41"
                  />
                </Link>
              </div>
            </Col>
            <Col md="9">
              <div className="logo-contact-box d-flex justify-content-end">
                <div className="emcontact-box d-flex">
                  <div className="box-icon">
                    <i className="flaticon-phone-call"></i>
                    {/* <IoMdCall /> */}
                  </div>
                  <div className="box-content">
                    <p>Call Us Now</p>
                    <span>(999) 999 9999</span>
                  </div>
                </div>
                <div className="emcontact-box d-flex">
                  <div className="box-icon">
                    <i className="flaticon-envelope"></i>
                  </div>
                  <div className="box-content">
                    <p>Enquery Us</p>
                    <span>info@touheed.education</span>
                  </div>
                </div>
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

      {/* Navbar */}
      <section className="main-menu">
        <Container>
          <Row>
            <Col md="12">
              <div className="main-menu-box">
                <div className="menu-box d-flex justify-content-between">
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
                        About Us <i className="las la-angle-down"></i>
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
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                      >
                        Schools<i className="las la-angle-down"></i>
                      </Link>
                      <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-grid"}
                          >
                            Programs Offered
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-list"}
                          >
                            Contact Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-details"}
                          >
                            Brochure
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-details"}
                          >
                            Scholarship Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                      >
                        Activites <i className="las la-angle-down"></i>
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
                        to={process.env.PUBLIC_URL + "/contact"}
                        data-toggle="dropdown"
                      >
                        Contact Us<i className="las"></i>
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav search-cart-bar">
                    <li className="nav-item search-box">
                      <Search />
                    </li>
                    <li className="nav-item cart-box">
                      <Link
                        to={process.env.PUBLIC_URL + "/cart"}
                        className="nav-link nav-cart"
                      >
                        <i className="las la-shopping-bag"></i>
                      </Link>
                    </li>
                    <li className="nav-item side-box">
                      <Sidebar />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sticky Menu */}
      <StickyMenu />

      {/* Mobile Menu */}
      <MobileMenu />
    </Styles>
  );
};

export default Header;
