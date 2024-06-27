import React, { useEffect } from "react";
import { FooterNewStyles } from "./FooterNewStyles.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allSchoolsListAction } from "../../actions/LandingPageActions.js";
import { schoolList } from "../../actions/schoolActions.js";

const FooterNew = () => {
  const logoUrl = "/assets/images/Touheed-logo.png";
  const dispatch = useDispatch();
  const {
    schools,
    loading: schoolLoading,
    error: errorMsg,
  } = useSelector((state) => state.schoolList);

  useEffect(() => {
    dispatch(schoolList());
  }, [dispatch]);

  return (
    <FooterNewStyles>
      <div className="footer-div">
        <div className="footer-div-container d-flex flex-wrap">
          <div className="logo-column">
            <img src={`${logoUrl}`} alt="" className="footer-logo" />
            <p className="footer-text">
              Touheed Educational Trust (R) is a private charitable and minority
              educational institution recognized by the Govt. of Karnataka.
            </p>
            <br />
            <div>Gangolli, Udupi District, Karnataka State, India</div>
            <br />
            <div>info@touheed.education</div>
            <br />
            <div>08254-265151, 275251</div>
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
            {schools?.rows?.map((item, i) => (
              <div className="footer-links">
                <Link to={`/schooldetail/${item.slug}`} state={{ id: item.id }}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
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
          <div className="footer-below-hr-text">
            Crafted by{" "}
            <a href="https://lowcosys.com/" className="fs-5 fw-bold">
              locosys
            </a>
          </div>
        </div>
      </div>
    </FooterNewStyles>
  );
};

export default FooterNew;
