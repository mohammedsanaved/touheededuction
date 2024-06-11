import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TabBoxCommonSytles } from './TabBoxCommonSytles.js';

const TabBoxCommon = () => {
  return (
    <TabBoxCommonSytles>
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
                        <i className="las la-arrow-right"></i>Our Mission
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="vision">
                        <i className="las la-arrow-right"></i> Our Vision
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="ranking">
                        <i className="las la-arrow-right"></i> Aim & Objectives
                      </Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="research">
                        <i className="las la-arrow-right"></i> Transportation
                      </Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                </Col>
                <Col lg="9" md="8">
                  <Tab.Content>
                    <Tab.Pane eventKey="why">
                      <h4 className="tab-title">Why Us</h4>
                      <p className="tab-desc">
                        Touheed English Medium School is a leading school
                        located in coastal town of Ganguli on the golden sands
                        of Arabian Sea. From its humble beginning in 1991, TEMS
                        is committed to provide wholesome quality education.
                        Ours is a school where children rejoice in their
                        childhood, learn as they grow and find the whole process
                        of education, a fun-filled experience that enables them
                        to rise to their maximum potential.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="mission">
                      <h4 className="tab-title">Our Mission</h4>
                      <p className="tab-desc">
                        To provide our children a perfect academic curriculum,
                        alming at instilling in them the true spirit and
                        ideologies of Islam, creating a balance between
                        spiritual, social, physical and academic education. We
                        aspire to have an alumni of socially conscious,
                        brilliant and successful men and women spread over the
                        globe carrying the flag of Touheed.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="vision">
                      <h4 className="tab-title">Our Vision</h4>
                      <p className="tab-desc">
                        One day, all children in our county will have the
                        opportunity to attain an excellent education, creative
                        in their minds, compassionate, respectful in their
                        approach to all fellow countrymen, and commitment to the
                        ideals of plurastic, open and democrative society
                      </p>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="ranking">
                      <h4 className="tab-title">Aims & Objectives</h4>
                      <p className="tab-desc">
                        Touheed English Medium School is a leading school
                        located in coastal town of Ganguli on the golden sands
                        of Arabian Sea. From its humble beginning in 1991, TEMS
                        is committed to provide wholesome quality education.
                        Ours is a school where children rejoice in their
                        childhood, learn as they grow and find the whole process
                        of education, a fun-filled experience that enables them
                        to rise to their maximum potential. We provide ample
                        time for academics, extracurricular activities and
                        socialization with peers.
                      </p>
                    </Tab.Pane> */}
                    {/* <Tab.Pane eventKey="research">
                      <h4 className="tab-title">Transportation</h4>
                      <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </div>
      </section>
    </TabBoxCommonSytles>
  );
};

export default TabBoxCommon;
