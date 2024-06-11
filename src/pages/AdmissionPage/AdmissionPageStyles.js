import { styled } from "styled-components";

export const AdmissionPageStyles = styled.div`
  .admission-header {
    background-color: rgba(230, 239, 255, 1);
    padding-top: 22px;
    padding-bottom: 22px;
    margin-bottom: 88px;
  }

  .logo-img {
    margin-right: 50px;
  }

  .admission-title {
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    line-height: 43.57px;
    text-align: center;
    color: rgba(2, 74, 176, 1);
  }

  .fresh-admission-text {
    font-family: Inter;
    font-size: 32px;
    font-weight: 400;
    line-height: 38.73px;
    text-align: center;
    color: rgba(26, 51, 132, 1);
    max-width: 1126px;
    margin-bottom: 75px;
  }

  .step-div {
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    text-align: center;
    color: rgba(26, 51, 132, 1);
    background: rgba(198, 218, 255, 0.44);
    max-width: 408px;
    padding: 17px;
    min-height: 150px;
    border-radius: 10px;
  }

  .steps-arrow {
    width: 63px;
    height: 27px;
  }

  .document-req-div {
    border: 1px solid grey;
    border-radius: 10px;
    max-width: 1128px;
    margin-top: 54px;
    padding: 40px;
  }
  .document-req-text {
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    line-height: 43.57px;
    text-align: center;
    color: rgba(26, 51, 132, 1);
    margin-bottom: 20px;
  }

  .doc-text {
    max-width: 846px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    text-align: left;
    color: rgba(26, 51, 132, 1);
  }
  .doc-list {
    list-style-type: none;
    padding: 0;
  }

  .doc-item {
    margin-bottom: 10px; /* Adjust margin as needed */
  }

  .fee-concession-text {
    max-width: 1126px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    text-align: center;
    color: rgba(26, 51, 132, 1);
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .fee-concession-text span {
    font-weight: 700;
  }
  @media screen and (max-width: 900px) {
    .fresh-admission-text {
      font-size: 25px;
    }
    .steps-container {
      flex-direction: column;
      row-gap: 40px;
    }

    .steps-arrow {
      rotate: 90deg;
    }
    .document-req-div,
    .fee-concession-text,
    .step-div {
      margin-left: 15px !important;
      margin-right: 15px !important;
    }
  }

  @media screen and (max-width: 600px) {
    .logo-img {
      margin-right: 10px;
      width: 50px;
    }
    .admission-title {
      font-size: 18px;
      line-height: 27px;
    }
    .fresh-admission-text {
      font-size: 20px;
      line-height: 27px;
    }
    .step-div {
      font-size: 18px;
      line-height: 27px;
      min-height: 120px;
    }

    .document-req-text {
      font-size: 22px;
    }
    .doc-text {
      font-size: 18px;
      line-height: 27px;
    }

    .fee-concession-text {
      font-size: 18px;
      line-height: 27px;
    }
  }

  .form-container {
    background-color: rgba(230, 239, 255, 1);
    max-width: 516px;
    padding: 50px;
    margin: auto;
    border-radius: 10px;
    margin-top: 60px;
  }

  .form-basic-student {
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    line-height: 38.73px;
    text-align: center;
    color: rgba(26, 51, 132, 1);
    margin-bottom: 60px;
  }

  .form-fields {
    max-width: 421px;
    width: 100%;
    height: 60px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 29.05px;
    text-align: left;

    color: rgba(26, 53, 134, 1);
    border: none;
    border-radius: 10px;
    padding-left: 36px;
    margin-bottom: 32px;
  }

  .form-fields::placeholder {
    color: rgba(26, 53, 134, 1);
  }

  .form-button {
    background-color: rgba(4, 156, 80, 1);
    border: none;
    padding: 20px 45px;
    border-radius: 5px;

    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 29.05px;
    text-align: center;
    color: white;
  }

  .button-div {
    display: flex;
    gap: 20px;
  }

  @media screen and (max-width: 600px) {
    .form-fields {
      font-size: 18px;
    }

    .form-button {
      font-size: 18px;
      padding: 10px 22px;
    }

    .form-container {
      padding: 25px;
    }
  }


  .logo-img{
    max-width:80px;
  }
`;
