import { styled } from "styled-components";
export const Styles = styled.div`
  .testimonialHeader {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
    text-align: center;
    color: black;
    margin-bottom: 75px;
    margin-top: 75px;
  }
  .what-our-students-say {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 29.05px;
    text-align: center;
    color: black;
    margin-bottom: 60px;
  }

  .testimonials-main-div {
    background-color: rgba(246, 249, 255, 1);
    padding-top: 50px;
    padding-bottom: 50px;
    max-width: 100%;
  }

  .testimonial-div-for-arrows {
    position: relative;
    max-width: 1300px;
    margin: auto;
  }

  .testimonial-div {
    background-color: white;
    // border:1px solid black;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 30px;
    max-width: 475px;

    margin: auto;
  }

  .testimonial-slider-div {
    max-width: 1000px;
    margin: auto;
  }

  .testimonial-username {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    color: black;
  }

  .testimonial-desc {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    color: rgba(141, 138, 138, 1);
  }

  .testimonial-profile-pic {
    max-width: 49px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .testimonial-pic-name-div {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 900px) {
    .testimonial-div {
      margin: auto;
    }
    .testimonials-main-div {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .swiper-pagination {
    bottom: var(--swiper-pagination-bottom, -35px);
  }

  .swiper-horizontal {
    overflow-y: visible;
  }

  .testimonial-custom-prev,
  .testimonial-custom-next {
    width: 35px;
    height: 35px;
    background-image: url("/assets/images/right-arrow.png");
    background-size: contain;
    cursor: pointer;
    position: absolute;
    top: 50%;
    background-color: white;
    border: 5px solid white;
    border-radius: 50%;
  }

  .testimonial-custom-prev {
    transform: scaleX(-1);
  }
  .testimonial-custom-prev {
    left: 50px;
  }

  .testimonial-custom-next {
    right: 50px;
  }
  .swiper-pagination-bullet {
    background-color: rgba(4, 156, 80, 1);
  }

  .swiper-pagination-bullet-active {
    background-color: #049c50;
  }

  .testimonial-desc-readmore {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    color: black;
    background: transparent;
    border: none;
    padding: 0px;
    margin-top: 10px;
  }
`;
