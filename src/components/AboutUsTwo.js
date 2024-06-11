import React, { useState } from 'react';
import Datas from '../data/about-us/about-us.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import { Styles } from "./styles/aboutUsTwo.js";

const AboutUsTwo = ({description}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <Styles>
            {/* About Us */}
            <section className="about-us">
                <Container>
                    <Row className='about-us-row'>
                        <Col md="6">
                            {/* <h2 className='about-us-h2'>About Us</h2> */}
                            <div className="about-image">
                                <img src={process.env.PUBLIC_URL + `/assets/images/${Datas.mainImage}`} className="main-img" alt="" />
                               
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="about-content">
                                <h4 className="about-title">{Datas.title}</h4>
                                <p className="about-para">{description}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    );
};

export default AboutUsTwo;
