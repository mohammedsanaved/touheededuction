import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection";
import WhyUs from "./components/WhyUs";
import Infrastructure from "./components/Infrastructure";
import Brouchers from "./components/Brouchers";
import Event from "./components/Event";
import FAQs from "./components/FAQs";
import NoticeBoard from "./components/NoticeBoard";

import GreenButton from "../../components/GreenButton/GreenButton";
import { Link, useLocation } from "react-router-dom";
import { schoolDetails } from "../../actions/schoolActions";
import { SchoolPageStyle } from "./SchoolPageStyle";
import FooterSchool from "../../components/FooterSchool/FooterSchool";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";


const SchoolPage = () => {
  let { state } = useLocation();
  let { id } = state;
  const dispatch = useDispatch();
  const schoolDetail = useSelector((state) => state.schoolDetails);
  const { loading, school } = schoolDetail;
  console.log(schoolDetail, "schoolDetail");
  useEffect(() => {
    dispatch(schoolDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <SchoolPageStyle>
        {/* <HeaderTwo logo={school.logo} /> */}
        <HeaderNew2 logo_img={school.logo} />
        <div className="">
          <div className="position-relative school-details-video">
            {loading ? (
              <div>Loading.....</div>
            ) : (
              <video
                className="w-100 video-element"
                // style={{  }}
                autoPlay
                muted
                loop
              >
                <source
                  src={`${process.env.REACT_APP_API_URL}/${school.video}`}
                  type="video/mp4"
                />
              </video>
            )}
            <div className="video-banner-text mx-auto position-absolute">
              <div className="text-center school-title">{school.name}</div>
              <div className="school-description">{school.description}</div>
              <div className="school-buttons d-flex justify-content-center mx-auto">
                <Link
                  to={`/school-about-us/${school.slug}`}
                  // to={`/schooldetail/${img.slug}`}
                  state={{ id: school.id }}
                >
                  {console.log(school, "Changes")}
                  <GreenButton text="About Us" />
                </Link>
                <Link to={`/admission-page/${id}`}>
                  <GreenButton text="Admission Details" />
                </Link>
              </div>
            </div>
          </div>
          <BreadCrumbs />

          <WhyUs image={school.image} description={school.summary} />
          <Infrastructure
            infrastructure={school.infrastructure}
            title_name="Infrastructure"
          />
          {school?.brochure?.map((doc) => (
            <Brouchers doc={doc} key={doc.id} />
          ))}
          <div className="latest-event-title">Latest Events</div>
          <div className="event-container mx-auto">
            {school?.events?.map((event) => (
              <Event key={event.id} item={event} />
            ))}
          </div>
          <FAQs faqs={school.faq} />
          {/* {school?.noticeboard?.map((item) => ( */}
          <NoticeBoard noticeboard={school.noticeboard} />
          {/* // ))} */}
          <h3 className="contact-us-title">Contact Us</h3>
          <ContactInfoSection />
        </div>

        <FooterSchool
          logo={school.logo}
          events={school.events}
          description={school.description}
          location={school.location}
          email={school.school_email}
          contactNumber={school.contact_no}
        />
      </SchoolPageStyle>
    </>
  );
};

export default SchoolPage;