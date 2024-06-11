import React, { useState } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Styles } from "./styles/breadcrumb.js";

const BreadcrumbBox = ({ title }) => {
  const [backgroundImage] = useState("breadcrumb-bg.jpg");

  return (
    <Styles>
      <section
        className="breadcrumb-area"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${backgroundImage})`,
        }}
      >
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <div className="breadcrumb-box">
                <h2 className="breadcrumb-title">{title}</h2>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>{title}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default BreadcrumbBox;
