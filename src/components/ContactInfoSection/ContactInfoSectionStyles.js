import styled from "styled-components";

export const ContactInfoSectionStyles = styled.div`
  .contact-info-container {
    background-color: rgba(246, 249, 255, 1);
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .contact-info-div h2,
  .get-in-touch-div h2 {
    font-family: Inter;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
  }

  .contact-info-container-div {
    max-width: 1154px;
    justify-content: space-between;
  }

  .contact-info-container .green-hr {
    height: 8px;
    background-color: #0cad6c;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 94px;
    opacity: 1;
    margin-bottom: 40px;
  }

  .contact-info-icon-text-div img {
    width: 54px;
    height: 54px;
  }

  .contact-info-text h3 {
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: black;
    margin-bottom: 10px;
  }

  .contact-info-text p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #9e9a9a;
  }

  .contact-info-text {
    max-width: 250px;
    width: 100%;
    margin-bottom: 30px;
  }

  .icon-text-div {
    column-gap: 70px;
  }

  .get-in-touch-form-input {
    border: 1px solid rgba(0, 0, 0, 0.58);
    border-radius: 5px;
    margin-bottom: 35px;
    padding: 7px 20px;
    width: 100%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    color: rgba(0, 0, 0, 0.58);
  }

  .get-in-touch-form-input::placeholder {
    color: rgba(0, 0, 0, 0.58);
    font-family: Inter;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
  }

  .form-email-subject {
    column-gap: 22px;
  }

  .form-btn {
    background-color: rgba(12, 173, 108, 1);
    width: 100%;
    border: none;
    color: white;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    border-radius: 5px;
    padding: 10px 10px;
    margin-top: 20px;
  }
  .form-btn:hover {
    background-color: rgba(12, 173, 200, 134);
  }

  .message-area {
    min-height: 138px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .errorMsg {
    font-size: 15px;
    font-weight:400;
    color: red;
  }

  @media (max-width: 1200px) {
    .contact-info-container-div {
      padding-left: 20px;
      padding-right: 20px;
    }
    .contact-info-container-div {
      flex-direction: column;
    }
    .contact-info-div,
    .get-in-touch-div {
      margin: auto;
      margin-bottom: 50px;
      width: 100%;
    }
    .form-email-subject {
      flex-direction: column;
    }
  }


  .get-in-touch-form-input{
    margin-bottom: 5px;
  }

  .form-container-div{
    margin-bottom:15px;
  }


  select.get-in-touch-form-input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image:url("./assets/images/down-arrow.png");
    background-repeat: no-repeat;
    background-position-x: 290px;
    background-position-y: 8px;
    background-size: 7%;
  }

  @media only screen and (max-width: 1100px) {
    select.get-in-touch-form-input{
      -webkit-appearance: auto;
    -moz-appearance:auto;
    appearance: auto;
    background-image:none;
    }

  }


  @media only screen and (max-width: 600px) {

    .icon-text-div{
      column-gap: 30px;
    }
  }


`;