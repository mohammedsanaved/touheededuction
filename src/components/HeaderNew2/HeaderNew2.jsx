import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNew2Styles } from "./HeaderNew2Styles.js";
import { schoolList } from "../../actions/schoolActions.js";

const HeaderNew2 = ({ logo_img }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const logoUrl = "/assets/images/Touheed-logo.png";
  const dispatch = useDispatch();
  const {
    schools,
    loading: schoolLoading,
    error: errorMsg,
  } = useSelector((state) => state.schoolList);

  useEffect(() => {
    dispatch(schoolList());
  }, [dispatch]);

  return (
    <HeaderNew2Styles>
      <Navbar
        variant="dark"
        expand="lg"
        fixed="top"
        className="navbar-container"
      >
        <Container className="header-div">
          <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
              {logo_img ? (
                // If 'img' prop exists, use it
                <img
                  src={`${process.env.REACT_APP_API_URL}/${logo_img}`}
                  alt="LOGO"
                  className="header-logo"
                />
              ) : (
                // If 'img' prop doesn't exist, use the default image
                <img src={logoUrl} alt="Default" className="header-logo" />
              )}
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMobileMenu}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={showMobileMenu ? "show" : ""}
          >
            <Col lg={9}>
              <Nav className="ml-auto justify-content-end nav-link-container">
                <Nav.Link as={Link} to={process.env.PUBLIC_URL + "/"}>
                  Home
                </Nav.Link>
                <NavDropdown title="About Us" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to={process.env.PUBLIC_URL + "/about"}
                  >
                    Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={process.env.PUBLIC_URL + "/management"}
                  >
                    Board of Management
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link as={Link} to={process.env.PUBLIC_URL + "/"}>
                  Admission
                </Nav.Link> */}
                <NavDropdown title="Institutions" id="basic-nav-dropdown">
                  {schools?.rows?.map((names) => (
                    <NavDropdown.Item
                      key={names.id}
                      as={Link}
                      to={`/schooldetail/${names.slug}`}
                      state={{ id: names.id }}
                    >
                      {names.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown title="Activities" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to={process.env.PUBLIC_URL + "/events"}
                  >
                    Events
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={process.env.PUBLIC_URL + "/contact-us"}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Col>
            {/* <Col lg={3} className="apply-btn-div">
                        <div className="apply-btn">
                            <Link to={process.env.PUBLIC_URL + "/registration"}>
                                <i className="las la-clipboard-list"></i>Apply Now
                            </Link>
                        </div>
                    </Col> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderNew2Styles>
  );
};

export default HeaderNew2