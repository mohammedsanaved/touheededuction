import { styled } from "styled-components";

export const Styles = styled.div`
  .single-event-div-container {
    margin-top: 100px;
  }

  .event-div-container {
    max-width: 500px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 200px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);
    margin-top: 25px;
    margin-left: -35px;
    padding: 25px 35px;
    background-color: white;
    border-radius: 6px;
    align-items: center;
  }

  .single-event-event-title {
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 18.94px;
    text-align: left;
    color: black;
    margin-top: -10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }

  .event-div-container .first-col {
    // border-right: 1px solid grey;

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

  .single-event-text {
    font-family: Inter;
    font-size: 14px;
    font-weight: 300;
    line-height: 16.94px;
    text-align: left;
    margin-top: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
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
    padding-left: 53px;
    align-items: center;
    justify-content: center;
  }

  .event-details-btn {
    background: rgba(4, 156, 80, 1);
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.94px;
    text-align: center;
    color: white;
    padding: 7px 12px;
    border: none;
    border-radius: 6px;
    margin-top: -18px;
  }

  .event-img {
    width: 179px;
    height: 252px;
    object-fit: cover;
  }
  .event-img {
    border-radius: 10px;
  }

  @media screen and (max-width: 600px) {
    .event-img {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    .single-event-div-container {
      padding-left: 15px;
      padding-right: 15px;
    }

    .event-div-container {
      margin-left: auto;
      margin-right: auto;
    }

    .single-event-div-container {
      flex-direction: column;
    }

    .event-img {
      width: 100%;
    }

    .event-div-container {
      margin-top: 0px;
    }

    .title-date {
      flex-direction: column-reverse;
    }
    .event-details-btn {
      width: fit-content;
      margin: auto;
    }

    .single-event-event-title {
      line-height: 22.94px;

      font-size: 18px;
      text-align: center;
      -webkit-line-clamp: 2;
    }
    .event-div-container {
      height: 240px;
    }

    .event-div-container {
      max-width: 100%;
      padding: 10px 20px;
    }
  }

  @media screen and (min-width: 1000px) {
    .title-date {
      align-items: center;
    }

    .single-event-event-title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3;
    }

    h2.single-event-event-title {
      width: 200px;
    }
    .event-details-btn {
      height: fit-content;
    }
  }


  .event-icons-div{
    column-gap:10px;
  }
`;
