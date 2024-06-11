import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
 
  .card-main-div {
 
    max-width: 250px;
    width: 100%;
    border-radius:15px;
    overflow:hidden;
  }

  .img-div,
  .speakerImg {
    width: 100%;
    border-radius:15px;
    object-fit: cover;
    object-position: top;
    height:250px;
    margin-bottom:10px;
    
  }

  
  

  .eventDetail_main h2{
    margin-top:80px !important;
    font-family: Inter;
font-size: 32px;
font-weight: 700;
line-height: 38.73px;
text-align: left;
margin-bottom:80px;

  }

  .speaker-name{
    font-size:20px;
    font-weight:800;
    text-align:center;
    font-family: Inter;
  }
.speaker-details{
  text-align:center;
  font-size:15px;
  font-weight:400;

  font-family: Inter;
  color:#049C50;


}
`;
