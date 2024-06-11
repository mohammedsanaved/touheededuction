import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown, Nav,Navbar,NavDropdown } from "react-bootstrap";
import Search from "./common/Search";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import { Styles } from "./styles/headerTwo.js";
import logo from "../assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { allSchoolsListAction } from "../actions/LandingPageActions.js";









const HeaderTwo = ({ logo }) => {


  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };



  const logoUrl = "/assets/images/Touheed-logo.png";
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
      <section className="logo-area2">
        <Container>
          <Row>
            <Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    src={logoUrl}
                    // src={`${process.env.REACT_APP_API_URL}/${logo} || ${logoUrl}`}
                    alt="LOGO"
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
                      to={process.env.PUBLIC_URL + "/contact-us"}
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

      {/* Sticky Menu */}
      {/* <StickyMenu /> */}

      {/* Mobile Menu */}
      <MobileMenu />


      {/* ---------------------------------------------------------------------------------- */}

      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <div className="logo">
          <Link to={process.env.PUBLIC_URL + "/"}>
            <img
              src={logoUrl} // Assuming logoUrl is defined somewhere
              alt="LOGO"
              className="header-logo"
            />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMobileMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className={showMobileMenu ? "show" : ""}>
          <Col lg={9}>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to={process.env.PUBLIC_URL + "/"}>
                Home
              </Nav.Link>
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={process.env.PUBLIC_URL + "/about"}>
                  Overview
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={process.env.PUBLIC_URL + "/management"}>
                  Board of Management
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={process.env.PUBLIC_URL + "/"}>
                Admission
              </Nav.Link>
              <NavDropdown title="Institutions" id="basic-nav-dropdown">
                {allschools?.rows?.map((names) => (
                  <NavDropdown.Item
                    key={names.id}
                    as={Link}
                    to={`/schooldetail/${names.id}`}
                  >
                    {names.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Activities" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={process.env.PUBLIC_URL + "/events"}>
                  Events
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={process.env.PUBLIC_URL + "/contact-us"}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <div className="apply-btn">
              <Link to={process.env.PUBLIC_URL + "/registration"}>
                <i className="las la-clipboard-list"></i>Apply Now
              </Link>
            </div>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </Styles>
  );
};

export default HeaderTwo;