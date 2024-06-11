import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Styles } from "./styles/Testimonial";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { testimonialsAction } from "../actions/LandingPageActions";

const Testimonial = () => {


  const  maxLengthToShowButton  = 100;

  const [expandedStates, setExpandedStates] = useState({});

  const toggleReadMore = (index) => {
    setExpandedStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index]
    }));
  };

  const dispatch = useDispatch();
  const testimonial = useSelector((state) => state.testimonialList);

  useEffect(() => {
    dispatch(testimonialsAction());
  }, [dispatch]);

  const { testimonials, loading, error } = testimonial;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const placeholdernUrl = '/assets/images/placeholder-person.jpg';

  return (
    <Styles>
      <div className="testimonialHeader">
        Testimonials
      </div>
      <div className="testimonials-main-div">
        <div className="testimonial-div-for-arrows">
          <div className="what-our-students-say">What our students say about our website</div>
          <div className="testimonial-slider-div">
            <Swiper
              className="mySwiper"
              modules={[Pagination, Navigation, Autoplay]}
              slidesPerView={1}
              slidesPerGroup={1}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: '.testimonial-custom-prev',
                nextEl: '.testimonial-custom-next'
              }}
              breakpoints={{
                900: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
                }
              }}
            >
              {testimonials?.rows?.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-div">
                    <div className="testimonial-pic-name-div d-flex align-items-center">
                      <img className="testimonial-profile-pic" src={`${placeholdernUrl}`} alt="" />
                      <div className="testimonial-username">{testimonial.username}</div>
                    </div>
                    <div key={index}>
                      <p className="testimonial-desc">
                        {expandedStates[index] ? testimonial.description : testimonial.description.slice(0, maxLengthToShowButton) + '...'}
                      </p>
                      {testimonial.description.length > maxLengthToShowButton && (
                        <button className="testimonial-desc-readmore" onClick={() => toggleReadMore(index)}>
                          {expandedStates[index] ? 'Read less' : 'Read more'}
                        </button>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="testimonial-custom-prev"></div>
          <div className="testimonial-custom-next"></div>
        </div>
      </div>
    </Styles>
  );
};

export default Testimonial;
