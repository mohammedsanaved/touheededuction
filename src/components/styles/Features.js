import { styled } from "styled-components";

export const Styles = styled.div`
  .feature_header {
    font-family: Inter;
font-size: 36px;
font-weight: 700;
line-height: 43.57px;
text-align: center;

    color: #000;
    margin-bottom: 16px;
    margin-top: 80px;
    margin-bottom: 80px;

  }

  .feature_main {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .feature_card {
    height:242px;

    max-width:201px;

    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    border-radius:10px;
    
  }

  .Featureimg {
    width: 100%;
    max-width: 100%;
    height:242px;
    aspect-ratio: 2/3;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-bottom: 12px;
  }

  .Featuretitle {
    
    font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: center;
color:black;
text-transform: uppercase;

  }

  @media (max-width: 768px) {
    .feature_main {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: flex-start;
    }

    .feature_card {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 576px) {
    .feature_card {
      width: calc(100% - 20px); /* Make cards take full width */
    }
  }





`;
