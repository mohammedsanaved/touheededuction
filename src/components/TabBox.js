import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Styles } from "./styles/tabBox.js";

const TabBox = ({ why_us, vision, mission, aim, transportation }) => {
  return (
    <Styles>
      {/* Tab Box Area */}
      <section className="tab-section">
        <div className="tab-section-container">
          <Container>
            <Tab.Container defaultActiveKey="why">
              <Row>
                <Col lg="3" md="4">
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="why">
                        <i className="las la-arrow-right"></i> Why Us
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="mission">
                        <i className="las la-arrow-right"></i> Our Vision
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="vision">
                        <i className="las la-arrow-right"></i> Our Mission
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ranking">
                        <i className="las la-arrow-right"></i> Aim & Objectives
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="research">
                        <i className="las la-arrow-right"></i> Transportation
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg="9" md="8">
                  <Tab.Content>
                    <Tab.Pane eventKey="why">
                      <h4 className="tab-title">Why Us</h4>
                      <p className="tab-desc">{why_us}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="mission">
                      <h4 className="tab-title">Our Mission</h4>
                      <p className="tab-desc">{mission}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="vision">
                      <h4 className="tab-title">Our Vision</h4>
                      <p className="tab-desc">{vision}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="ranking">
                      <h4 className="tab-title">Aims & Objectives</h4>
                      <p className="tab-desc">{aim}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="research">
                      <h4 className="tab-title">Transportation</h4>
                      <p className="tab-desc">{transportation}</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </div>
      </section>
    </Styles>
  );
};

export default TabBox;
