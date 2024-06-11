import styled from "styled-components";

export const SingleEventStyles = styled.div`
  .thumbnail_img {
    max-width: 298px;
    border-radius: 6px;
    height: 290px;
    object-fit: cover;
  }

  .single-event-div-container {
    margin-top: 100px;
  }

  .event-div-container {
    max-width: 761px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 200px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);
    margin-top: 51px;
    margin-left: -35px;
    padding: 25px 35px;
    background-color: white;
    border-radius: 6px;
  }

  .single-event-event-title {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.94px;
    text-align: left;
    color: black;
  }

  .event-div-container .first-col {
    border-right: 1px solid #c3d6c8;
    padding-right: 25px;
    max-width: 498px;
    width: 100%;
  }

  .event-icons-div {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    margin-top: 11px;
  }

  .event-location-icon {
    margin-left: 15px;
  }
  .event-time-icon{
    margin-right:5px;
  }
  

  .single-event-text {
    font-family: Inter;
    font-size: 14px;
    font-weight: 300;
    line-height: 16.94px;
    text-align: left;
    margin-top: 15px;
  }

  .single-event-event-date {
    font-family: Inter;
    font-size: 22px;
    font-weight: 700;
    line-height: 26.63px;
    text-align: left;
    color: rgba(102, 184, 72, 1);
  }

  .event-div-container .second-col {
    
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    max-width: 155px;
    width: 100%;
  }

  .event-details-btn {
    background: rgba(4, 156, 80, 1);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: center;
    color: white;
    padding: 11px 15px;
    border: none;
    border-radius: 6px;
    margin-top: 28px;
  }
  .single-event-text {
    display: -webkit-box;
    -webkit-line-clamp: 4; /* Number of lines you want */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media screen and (max-width: 900px) {
    .single-event-div-container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .single-event-div-container {
      flex-direction: column;
      max-width: 350px;
      margin-top: 50px;
      
    }
    
    .event-div-container {
      flex-direction: column;
      margin-top: 0px;
      margin-left: auto;
      margin-right: auto;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      padding: 10px;
      height: 100%;
      gap: 20px;
      padding:30px 15px;
    }

    .event-div-container .first-col {
      border-right: none;
      padding-right: 0px;
    }
    .event-div-container .second-col {
      padding-left: 0px;
      border-top: 1px solid #c3d6c8;
      padding-top: 20px;
      margin:auto;
    }

    .single-event-event-title {
      font-size: 16px;
    }
    .thumbnail_img {
      max-width: 100%;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
   

    .thumbnail_img {
      height: 200px;
      object-fit: cover;
    }
  }


  .event-icons-div{
    column-gap: 5px;
  }


  h2.single-event-event-date{
    color:rgba(4, 156, 80, 1);
  }

 
  .event-icons-div{

    display: grid !important;
    grid-template-columns: max-content max-content max-content max-content;
      row-gap:10px;
  
  
    }
  



  @media only screen and (min-width: 700px) and (max-width: 900px)  {

  .event-icons-div{

  display: grid !important;
    grid-template-columns: auto auto;
    row-gap:10px;


  }
}




`;
