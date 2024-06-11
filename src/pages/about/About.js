import { Styles } from "./styles/about.js";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2.jsx";
import TabBoxCommon from "./TabBoxCommon.jsx";
import Testimonial from "../../components/Testimonial.jsx";
import FooterNew from "../../components/FooterNew/FooterNew.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import AboutUs from "../../components/AboutUs.js";

const About = () => {
  const bg = "./assets/images/eventspageimage.png";

  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper about-page">
        <HeaderNew2 />

        <BannerSection bg_image={bg} />

        <BreadCrumbs />

        {/* About Area */}
        <AboutUs />

        <TabBoxCommon />

        <Testimonial />

        <FooterNew />
      </div>
    </Styles>
  );
};

export default About;
