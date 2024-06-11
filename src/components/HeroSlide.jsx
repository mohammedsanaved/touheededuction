import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HeroSlideStyle } from "./styles/HeroSlideStyle";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import GreenButton from "./GreenButton/GreenButton";
import { useDispatch, useSelector } from "react-redux";
// import { allSchoolsListAction } from "../actions/LandingPageActions";
import { Link } from "react-router-dom";
import { EffectCreative } from 'swiper/modules';
import { schoolList } from "../actions/schoolActions";

const HeroSlide = () => {
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
    <>
      <HeroSlideStyle>
        <div className="banner-container">
          {schoolLoading ? (
            <p>Loading......</p>
          ) : errorMsg ? (
            <p>Error: {errorMsg}</p>
          ) : (
            <Swiper
            initialSlide={8}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-100%", 0, 0],
                },
                next: {
                  translate: ["0%", 0, 0],
                },
                speed: 1000,
              }}
              modules={[Pagination, Navigation, Autoplay, EffectCreative]}
              className="mySwiper3"
              navigation={{
                prevEl: ".banner-custom-prev",
                nextEl: ".banner-custom-next",
              }}
            >
              {schools?.rows?.map((img) => (
                <SwiperSlide key={img.id}>
                  <div
                    className="image-container d-flex align-items-center"
                    key={img.id}
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_API_URL}/${img.image})`,
                    }}
                  >
                    <div className="mx-auto banner-text-container">
                      <h1 className="img-title">{img.name}</h1>
                      <p className="img-text mx-auto">{img.description}</p>
                      <div className="school-buttons d-flex justify-content-between mx-auto">
                        <Link
                          to={`/schooldetail/${img.slug}`}
                          state={{ id: img.id }}
                        >
                          {/* /schooldetail/${school.slug}`} state={{ id: school.id }} */}
                          <GreenButton text="Know More" />
                        </Link>
                        <Link to={`/admission-page/${img.id}`}>
                          <GreenButton text="Enquire" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="banner-custom-prev"></div>
          <div className="banner-custom-next"></div>
        </div>
      </HeroSlideStyle>
    </>
  );
};
export default HeroSlide;