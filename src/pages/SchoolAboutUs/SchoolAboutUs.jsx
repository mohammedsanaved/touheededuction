import React, { useEffect } from "react";
import { SchoolAboutUsStyle } from "./SchoolAboutUsStyle";
import AboutUsTwo from "../../components/AboutUsTwo";
import HeaderTwo from "../../components/HeaderTwo";
import BannerSection from "../../components/BannerSection/BannerSection";
import TabBox from "../../components/TabBox.js";
import AdditionalTabs from "../../components/AdditionalTabs/AdditionalTabs.jsx";
import Infrastructure from "../SchoolPage/components/Infrastructure.jsx";
import { useDispatch, useSelector } from "react-redux";
import { schoolAboutUs } from "../../actions/schoolActions.js";
import { useLocation } from "react-router-dom";
import FooterSchool from "../../components/FooterSchool/FooterSchool.jsx";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";

const SchoolAboutUs = () => {
  const bg = "/assets/images/eventspageimage.png";

  let { state } = useLocation();
  let { id } = state;
  console.log(id, "id AboutUs");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(schoolAboutUs(id));
  }, [dispatch, id]);

  const schoolAboutUsdata = useSelector((state) => state.schoolAboutUs);
  const { school, loading } = schoolAboutUsdata;
  console.log(school, "Data from schoolAboutUs");

  return (
    <SchoolAboutUsStyle>
      <HeaderNew2 logo_img={school.logo} />
      <BannerSection bg_image={bg} title={"Home/Events"} />

      <BreadCrumbs />
      <AboutUsTwo
        description={school.description}
        image={school.image}
        video={school.video}
      />
      <TabBox
        why_us={school.summary}
        vision={school.vision}
        mission={school.mission}
        aim={school.aim}
        transportation={school.transportation}
      />
      <AdditionalTabs school_data={school} />
      <Infrastructure
        infrastructure={school.infrastructure}
        title_name="Features"
      />
      <FooterSchool
        logo={school.logo}
        events={school.events}
        description={school.description}
        slug={school.slug}
      />
    </SchoolAboutUsStyle>
  );
};

export default SchoolAboutUs;
