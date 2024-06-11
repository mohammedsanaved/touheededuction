import { styled } from "styled-components";

export const LatestEventsStyle = styled.div`
  .latest-events-title {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
    text-align: center;
    color: black;
    margin-bottom: 70px;
  }

  .latest-event-img {
    width: 463px;
    height: 439px;
    border-radius: 10px;
    object-fit: cover;
  }

  .event-carousel-container {
    display: flex;
    max-width: 1128px;
    column-gap: 50px;
    align-items: center;
  }

  .event-title {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: black;
    margin-bottom: 20px;
  }

  .event-text {
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.2px;
    text-align: left;
    color: rgba(141, 138, 138, 1);
    text-align:justify;
  }

  .event-text-sec {
    max-width: 463px;
  }

  .latest-event-custom-prev,
  .latest-event-custom-next {
    width: 35px;
    height: 35px;
    background-image: url("/assets/images/right-arrow.png");
    background-size: contain;
    cursor: pointer;
    position: absolute;
    top: 45%;
    background-color: white;
    border: 5px solid white;
    border-radius: 50%;
    z-index: 1;
  }

  .latest-event-custom-prev {
    transform: scaleX(-1);
    left: 10px;
  }

  .latest-event-custom-next {
    right: 10px;
  }

  .latest-event-container {
    position: relative;
    max-width: 1128px;
    margin: auto;
    // border:1px solid black;
    // background-color: lightgrey;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
  }
  .event-container {
    max-width: 979px;
    margin: auto;
  }

  .swiper.swiper-initialized.swiper-horizontal.mySwiper {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 900px) {
    .event-carousel-container {
      padding-left: 30px;
      padding-right: 30px;
      align-items: center;
    }

    .swiper-wrapper {
      align-items: center;
    }

    .latest-event-img {
      width: 300px;
      height: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .event-carousel-container {
      flex-direction: column;
      align-items: center;
    }

    .swiper-wrapper {
      align-items: flex-start;
    }

    .latest-event-img {
      width: 300px;
      height: 300px;
    }
    .latest-event-custom-prev,
    .latest-event-custom-next {
      display: none;
    }
    img.latest-event-img {
      margin-bottom: 30px;
      width: 100%;
    }

    .latest-event-container {
      border: none;
    }
  }

  .swiper-wrapper {
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    .swiper-wrapper {
      align-items: flex-start;
    }
  }

  h3.event-school-name {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    margin-bottom: 20px;
    background: rgba(4, 156, 80, 1);
    width: fit-content;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    margin-bottom: 20px;
  }
`;
