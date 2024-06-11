import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import EventsSections from "./EventsSection/EventsSections";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const EventSectionCarousel = () => {
  return (
    <div className="mb-5">
      <div className="mb-4 d-flex fs-1 justify-content-center fw-bold text-dark">
        Latest Events
      </div>
      <Swiper
        rewind={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <EventsSections />
        </SwiperSlide>
        <SwiperSlide>
          <EventsSections />
        </SwiperSlide>
        <SwiperSlide>
          <EventsSections />
        </SwiperSlide>
        <SwiperSlide>
          <EventsSections />
        </SwiperSlide>
        <SwiperSlide>
          <EventsSections />
        </SwiperSlide>
        <SwiperSlide>
          <EventsSections />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventSectionCarousel;
// Import Swiper React components

// Import Swiper styles

// import "./styles.css";

// import required modules
