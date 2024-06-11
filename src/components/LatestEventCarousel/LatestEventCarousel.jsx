import React, { useEffect } from "react";
import { LatestEventsStyle } from "./LatestEventCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import EventCarousel from "../EventCarousel";
import { useDispatch, useSelector } from "react-redux";
import { latestEventAction } from "../../actions/LandingPageActions";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const LatestEventCarousel = () => {
  const locationIconUrl = "/assets/images/LatestEventsImg.png";
  const dispatch = useDispatch();
  const { latestevent, loading, error } = useSelector(
    (state) => state.latestEvent
  );

  useEffect(() => {
    dispatch(latestEventAction());
  }, [dispatch]);
  console.log(latestevent, "LatestEvent for LandingPage");
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <LatestEventsStyle>
      <div className="latest-events-title">Latest Events</div>
      <div className="latest-event-container">
        <div className="event-container">
          <Swiper
            // pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            navigation={{
              prevEl: ".latest-event-custom-prev",
              nextEl: ".latest-event-custom-next",
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {latestevent?.rows?.map((event) => (
              <SwiperSlide key={event.id}>
                <Link to={`event-details/${event.id}`}>
                  <div className="event-carousel-container mx-auto">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${event.thumbnail}`}
                      alt={event.title}
                      className="latest-event-img"
                    />
                    <div className="event-text-sec d-flex flex-column justify-content-center">
                      <h3 className="event-school-name">
                        {event?.school?.name}
                      </h3>
                      <h3 className="event-title">{event?.title}</h3>

                      <p className="event-text">
                        {truncateText(`${event.desc}`, 50)}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="latest-event-custom-prev"></div>
        <div className="latest-event-custom-next"></div>
      </div>
    </LatestEventsStyle>
  );
};

export default LatestEventCarousel;
