import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./styles/mobileMenu.js";

function MobileMenu() {

  const logoUrl = "/assets/images/Touheed-logo.png";



  useEffect(() => {
    // Mobile Menu
    const hmBtn = document.getElementById("mb-sidebar-btn");

    if (hmBtn) {
      const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
      const mdSidebarBody = document.getElementById("mb-sidebar-body");
      const mdSidebarExit = document.getElementById("close-mb-sidebar");

      hmBtn.addEventListener("click", function (e) {
        e.preventDefault();
        mdSidebarOverlay.classList.toggle("visible");
        mdSidebarBody.classList.toggle("opened");
      });

      mdSidebarOverlay.addEventListener("click", function (e) {
        e.preventDefault();
        mdSidebarOverlay.classList.remove("visible");
        mdSidebarBody.classList.remove("opened");
      });

      mdSidebarExit.addEventListener("click", function (e) {
        e.preventDefault();
        mdSidebarOverlay.classList.remove("visible");
        mdSidebarBody.classList.remove("opened");
      });
    }

    // Menu Accordion -----------------
    const menuButton = document.querySelectorAll(".toggle");
    menuButton.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (button.classList.contains("active")) {
          content.className = "mb-menu-content show";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.className = "mb-menu-content";
          content.style.maxHeight = "0";
        }
      });
    });
  });

  return (
    <Styles>
      {/* Mobile Menu */}
      <section className="mobile-menu-area">
        <Container>
          <Row>
            <Col md="0" sm="12">
              <div className="mb-logo-area d-flex justify-content-between">
                <div className="mb-logo-box d-flex justify-content-between w-100 align-items-center">
                  <div className="hm-button">
                    <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                      <i className="las la-bars"></i>
                    </a>
                  </div>
                  <div className="mb-logo">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <img src={process.env.PUBLIC_URL + logoUrl} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mobile Menu Sidebar */}
      <section className="mb-sidebar" id="mb-sidebar-body">
        <div className="mb-sidebar-heading d-flex justify-content-between">
          <div>
            <h5>Menu</h5>
          </div>
          <div>
            <a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar">
              <i className="las la-times"></i>
            </a>
          </div>
        </div>
        <div className="mb-sidebar-menu">
          <div className="mb-menu-item">
            <button className="mb-menu-button active">
              <p>
                {" "}
                <Link to={process.env.PUBLIC_URL + "/"}> Home </Link>{" "}
              </p>
            </button>
          </div>
          <div className="mb-menu-item">
            <button className="mb-menu-button toggle active">
              <p>
                {" "}
                About Us<i className="las la-plus"></i>
              </p>
            </button>
            <div className="mb-menu-content show">
              <ul className="list-unstyled">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/about"}>Overview</Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/management"}>
                    Board of Management
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-menu-item">
            <button className="mb-menu-button active">
              <p>
                {" "}
                <Link to={process.env.PUBLIC_URL + "/"}> Admission </Link>{" "}
              </p>
            </button>
          </div>

          <div className="mb-menu-item">
            <button className="mb-menu-button active">
              <p>
                {" "}
                <Link to={process.env.PUBLIC_URL + "/"}>
                  {" "}
                  Institution{" "}
                </Link>{" "}
              </p>
            </button>
          </div>

          <div className="mb-menu-item">
            <button className="mb-menu-button active">
              <p>
                {" "}
                <Link to={process.env.PUBLIC_URL + "/"}> Activities </Link>{" "}
              </p>
            </button>
          </div>
          <div className="mb-menu-item">
            <button className="mb-menu-button active">
              <p>
                {" "}
                <Link to={process.env.PUBLIC_URL + "/"}> Contact Us </Link>{" "}
              </p>
            </button>
          </div>
        </div>
      </section>
      <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
    </Styles>
  );
}

export default MobileMenu;
