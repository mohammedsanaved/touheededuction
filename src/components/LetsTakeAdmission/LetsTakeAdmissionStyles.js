import styled from "styled-components";

export const LetsTakeAdmissionStyles
 = styled.div`
  
 .admission-section-container {
    background: rgba(246, 249, 255, 1);
    margin-top: 119px;
  }
  
  .admission-section {
    max-width: 1154px;
    column-gap: 142px;
    align-items: center;
    padding-top: 63px;
    padding-bottom: 63px;
  }
  
  .admission-text-div {
    max-width: 571px;
  }
  
  .admission-text-div h2 {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(28, 47, 78, 1);
    margin-bottom: 16px;
  }
  
  .admission-text-div p {
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  
    color: rgba(158, 154, 154, 1);
  }
  
  
  @media (max-width: 1200px) {
     .admission-section{
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
     }
     .admission-text-div{
      max-width:100%;
      margin-bottom: 50px;
  
     }
     .enroll-img{
      width: 70%;
     }
    }`;