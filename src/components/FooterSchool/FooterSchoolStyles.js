import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const FooterSchoolStyles = styled.div`
  .footer-div {
    margin-top: 100px;
    background-color: rgba(246, 249, 255, 1);
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .footer-div-container {
    margin: auto;
    max-width: 1113px;
    width: 100%;
    justify-content: space-between;
  }

  .footer-div-container,
  .footer-text,
  .footer-links a {
    background-color: rgba(246, 249, 255, 1);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    text-align: left;
    color: black;
  }

  .footer-div-container .logo-column {
    max-width: 286px;
  }

  .footer-subheading {
    font-family: Inter;
    font-size: 16px;
    font-weight: 800;
    line-height: 19.36px;
    text-align: left;
    color: black;
    margin-top: 30px;
    margin-bottom: 57px;
  }

  .footer-links a {
    color: black;
  }
  .footer-links {
    margin-bottom: 20px;
  }
  .footer-logo {
    margin-bottom: 30px;
    width: 120px;
  }
  .footer-hr {
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  .footer-below-hr {
    margin: auto;
    max-width: 1113px;
    width: 100%;
    justify-content: space-between;
  }
  .footer-below-hr-text {
    font-family: Inter;
    font-size: 14px;
    font-weight: 200;
    line-height: 16.94px;
    text-align: left;
    color: rgba(0, 0, 0, 0.81);
  }

  @media only screen and (max-width: 900px) {
    .footer-div-container {
      justify-content: flex-start;
      padding-left: 30px;
      padding-right: 30px;

      display: grid !important;
      grid-template-columns: auto auto;
    }
    .logo-column {
      margin-right: 100px;
    }
    .footer-below-hr {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    .footer-subheading {
      margin-bottom: 27px;
    }
  }

  ul.social {
    li {
      a {
        text-align: center;
        position: relative;

        &:before {
          content: "";
          position: absolute;
          border-width: 8px 14px;
          border-style: solid;
          border-top-color: transparent;
          border-right-color: transparent;
          border-left-color: transparent;
          top: -16px;
          left: 0;
          z-index: 1;
          transition: all 0.2s ease;
        }

        &:after {
          content: "";
          position: absolute;
          border-width: 8px 14px;
          border-style: solid;
          border-right-color: transparent;
          border-bottom-color: transparent;
          border-left-color: transparent;
          bottom: -16px;
          left: 0;
          z-index: 1;
          transition: all 0.2s ease;
        }

        i {
          font-size: 14px;
          color: #ffffff;
          width: 28px;
        }

        &:hover {
          background-color: ${colors.green} !important;

          &:before {
            border-bottom-color: ${colors.green} !important;
          }

          &:after {
            border-top-color: ${colors.green} !important;
          }
        }
      }

      &:nth-child(1) {
        a {
          background-color: #4267b2;

          &:before {
            border-bottom-color: #4267b2;
          }

          &:after {
            border-top-color: #4267b2;
          }
        }
      }

      &:nth-child(2) {
        a {
          background-color: #1da1f2;

          &:before {
            border-bottom-color: #1da1f2;
          }

          &:after {
            border-top-color: #1da1f2;
          }
        }
      }

      &:nth-child(3) {
        a {
          background-color: #2867b2;

          &:before {
            border-bottom-color: #2867b2;
          }

          &:after {
            border-top-color: #2867b2;
          }
        }
      }

      &:nth-child(4) {
        a {
          background-color: #dd1343;

          &:before {
            border-bottom-color: #dd1343;
          }

          &:after {
            border-top-color: #dd1343;
          }
        }
      }

      &:nth-child(5) {
        a {
          background-color: #ea4c89;

          &:before {
            border-bottom-color: #ea4c89;
          }

          &:after {
            border-top-color: #ea4c89;
          }
        }
      }
    }

    @media (max-width: 767px) {
      text-align: center;
    }
  }

  @media only screen and (max-width: 600px) {
    .footer-div-container {
      grid-template-columns: auto;
    }
  }
  .footer-links a:hover {
    color: rgba(4, 156, 80, 1);
  }

  @media only screen and (min-width: 900px) {

  .ourschools-column.recent-posts-column {
    max-width: 250px;
}

}



  
`;