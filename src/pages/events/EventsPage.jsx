import React, { useEffect, useState } from "react";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import SingleEvent from "../../components/SingleEvent/SingleEvent.jsx";
import { EventsStyles } from "./EventsStyles.js";
import SortByEvents from "../../components/SortByEvents.jsx";
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../actions/eventActions.js";
import FooterNew from "../../components/FooterNew/FooterNew.jsx";
import { allSchoolsListAction } from "../../actions/LandingPageActions.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";


const Events = () => {
  const bg = "./assets/images/eventspageimage.png";
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { loading, events } = eventList;
  const { pages_count, error, rows } = events;
  const { allschools } = useSelector((state) => state.allSchoolsList);
  const [selectedSchoolId, setSelectedSchoolId] = useState("");
  const [page, setPage] = useState(0);
  const [limit] = useState(4);

  useEffect(() => {
    dispatch(listEvent(page, limit));
    dispatch(allSchoolsListAction());
  }, [dispatch, limit, page]);

  const handlePreviousPage = () => {
    setPage(() => page - 1);
  };
  const handleNextPage = () => {
    if (page <= pages_count) {
      setPage(() => page + 1);
    }
  };

  return (
    <>
      <EventsStyles>
        <HeaderNew2 />
        <BannerSection bg_image={bg} title={"Home/Events"} />
        <BreadCrumbs />
        <div className="event-page-div mx-auto w-100">
          <div className="d-flex w-100 select-div">
            <div className="w-100 select-school-text">
              Select the School Here :{" "}
            </div>
            <SortByEvents
              allschools={allschools}
              setSelectedSchoolId={setSelectedSchoolId}
            />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <>
              {rows?.map((event) =>
                !selectedSchoolId ? (
                  <SingleEvent key={event.id} event={event} />
                ) : (
                  selectedSchoolId &&
                  selectedSchoolId === event.school_id && (
                    <SingleEvent key={event.id} event={event} />
                  )
                )
              )}
              {/* {console.log(selectedSchoolId)} */}
              <div className="pagination-buttons">
                <button
                  onClick={handlePreviousPage}
                  disabled={page === 0}
                  className="pagination-button"
                >
                  <IoIosArrowBack className="fs-4 text-center" />
                  Prev
                </button>
                <span className="pcount">
                  {page + 1} / {pages_count}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={page === pages_count}
                  className="pagination-button"
                >
                  Next
                  <IoIosArrowForward className="fs-4 text-center mr-3" />
                </button>
              </div>
            </>
          )}
        </div>
      </EventsStyles>
      <FooterNew />
    </>
  );
};

export default Events;
