import { styled } from "styled-components";

export const Styles = styled.div`
  .gallery_main {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .galleryHeader {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
    text-align: center;
    color: black;

    margin-top: 70px;
    margin-bottom: 70px;
  }

  .oneofOne_sub {
    gap: 10px;
  }

  .oneofOne {
    max-width: 359px;
    width: 100%;
    height: 249px;
  }

  .oneofOne01 {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    aspect-ratio: 3 / 1;
    margin-bottom: 10px;
    width: 100%;
  }

  .oneofOne1,
  .oneofOne2 {
    max-width: 173px;
    width: 100%;
    height: 144px;
    object-fit: cover;
  }

  .oneofTwo-img {
    max-width: 427px;
    width: 100%;
    height: 403px;
    object-fit: cover;
  }

  .oneofThree1 {
    width: 315px;
    height: 179px;
  }

  .oneofThree2 {
    width: 313px;
    height: 218px;
  }

  img {
    height: auto;
    border-radius: 10px;
    max-width: 100%;
    aspect-ratio: 3/2;
  }

  @media screen and (max-width: 1200px) {
    .gallery_main {
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
    }
    .galleryHeader {
      padding-left: 20px;
      padding-right: 20px;
    }

    .oneofOne,
    .oneofOne1,
    .oneofOne2,
    .oneofTwo-img,
    .oneofThree1,
    .oneofThree2 {
      max-width: 100%;
      width: 100%;
      height: 100%;
    }

    .third-column {
      display: flex;
    }
  }
`;
