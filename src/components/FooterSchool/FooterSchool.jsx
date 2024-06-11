import React, { useEffect } from "react";
import { FooterSchoolStyles } from "./FooterSchoolStyles.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allSchoolsListAction } from "../../actions/LandingPageActions.js";

const FooterSchool = ({
  events,
  logo,
  description,
  location,
  email,
  contactNumber,
  slug,
}) => {
  const logoUrl = "/assets/images/Touheed-logo.png";
  const dispatch = useDispatch();
  const {
    allschools,
    loading: schoolLoading,
    error: errorMsg,
  } = useSelector((state) => state.allSchoolsList);

  useEffect(() => {
    dispatch(allSchoolsListAction());
  }, [dispatch]);

  return (
    <FooterSchoolStyles>
      <div className="footer-div">
        <div className="footer-div-container d-flex flex-wrap">
          <div className="logo-column">
            <img
              src={`${process.env.REACT_APP_API_URL}/${logo}`}
              alt=""
              className="footer-logo"
            />
            <p className="footer-text">{description}</p>
            <br />
            <div>{location}</div>
            <br />
            <div>{email}</div>
            <br />
            <div>{contactNumber}</div>
            <br />
          </div>
          <div className="quicklinks-column">
            <div className="footer-subheading">QUICK LINKS</div>
            <div className="footer-links">
              <Link>About Us</Link>
            </div>
            <div className="footer-links">
              <Link>Contact Us</Link>
            </div>

            <div className="footer-links">
              <Link>Privacy Policy</Link>
            </div>
          </div>
          <div className="ourschools-column">
            <div className="footer-subheading">OUR SCHOOLS</div>
            {allschools?.rows?.map((item, i) => (
              <div className="footer-links">
                <Link
                  // to={`/schooldetail/${item.id}`}
                  to={`/schooldetail/${slug}`}
                  state={{ id: item.id }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          {/* <div className="ourschools-column recent-posts-column">
            <div className="footer-subheading">RECENT EVENTS</div>
            {events?.map((item, i) => (
              <div className="footer-links">
                <Link to={`/event-details/${item.id}`}>{item.title}</Link>
              </div>
            ))}
          </div> */}
        </div>
        <hr className="footer-hr" />
        <div className="footer-below-hr d-flex">
          <div className="footer-below-hr-text">Copyright @ 2024</div>
          <div className="footer-icons">
            <ul className="social list-unstyled list-inline">
              <li className="list-inline-item">
                <a href={process.env.PUBLIC_URL + "/"}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={process.env.PUBLIC_URL + "/"}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={process.env.PUBLIC_URL + "/"}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={process.env.PUBLIC_URL + "/"}>
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={process.env.PUBLIC_URL + "/"}>
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterSchoolStyles>
  );
};

export default FooterSchool;
