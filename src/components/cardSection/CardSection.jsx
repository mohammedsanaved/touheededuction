import React, { useEffect } from "react";
import { Styles } from "./styles/cardSection";
import { Container, Row, Col } from "react-bootstrap";
// import Cards from "../Cards";
// import CardFlip from "../CardFlip";
import { useDispatch, useSelector } from "react-redux";
import { schoolList } from "../../actions/schoolActions";
import CardsNew from "../CardsNew/CardsNew";

const CardSection = () => {
  const dispatch = useDispatch();
  const { schools, loading, error } = useSelector((state) => state.schoolList);
  console.log(schools, "schoolData");

  useEffect(() => {
    dispatch(schoolList());
  }, [dispatch]);
  return (
    <Styles>
      <section className="cards">
        <Container>
          <div className="CardHeader">Our Schools</div>
          <Row className="cardsRow d-flex ">
            {loading ? (
              <p>Loading....</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              schools?.rows?.map((school) => (
                <Col className="flex-grow-0 flex-shrink-0">
                  
                  <CardsNew  key={school.id} school={school} />

                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default CardSection;
