import styled from "styled-components";

export const Styles = styled.div`
  .infrastructure-div {
    margin-top: 100px;
    max-width: 1207px;
  }
  .infrastucture-title {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
    text-align: center;
    color: black;
    margin-bottom: 100px;
  }
  .card-img-top {
    width: 347px;
    height: 347px;
    object-fit: cover;
  }

  .header {
    color: #000;
  }
  .img {
    transition: transform 0.3s ease-in-out;
  }

  .img:hover {
    transform: scale(1.05);
  }

  .img-text {
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 29.05px;
    text-align: center;
    color: black;
  }

  .infrastructure-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .infrastructure-row {
    display: flex;
    justify-content: space-evenly;
    max-width: 1185px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 900px) {
    .infrastructure-row {
      display: grid;
      grid-template-columns: auto auto;
    }
  }

  @media screen and (max-width: 600px) {
    .infrastructure-row {
      grid-template-columns: auto;
    }
    .infrastucture-title {
      font-size: 25px;
    }

    .infrastructure-div {
      margin-top: 50px;
    }
  }
`;
