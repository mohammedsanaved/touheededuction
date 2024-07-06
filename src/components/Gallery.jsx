import React, { useEffect } from "react";
import { Styles } from "./styles/Gallery";
import { useDispatch, useSelector } from "react-redux";
import { galleryAction } from "../actions/LandingPageActions";

const Gallery = () => {
  const dispatch = useDispatch();
  const galleryList = useSelector((state) => state.galleryList);
  const { gallery, loading, error } = galleryList;

  useEffect(() => {
    dispatch(galleryAction());
  }, [dispatch]);

  const data = gallery?.data?.map((item, i) => item.image);
  console.log(data, "images from Gallery");
  const image01 = data?.[0];
  const image02 = data?.[1];
  const image03 = data?.[2];
  const image04 = data?.[3];
  const image05 = data?.[4];
  const image06 = data?.[5];
  if (loading) {
    <div>Loading....</div>;
  }
  if (error) {
    <div>Error: {error}</div>;
  }
  return (
    <Styles>
      <div className="galleryHeader">
        We Have Best Campus In The Region. Let's Explore The Campus.
      </div>
      <div className="gallery_main">
        <div className="d-flex flex-column">
          <div>
            <img
              src={`${process.env.REACT_APP_API_URL}/${image01}`}
              className="oneofOne"
              alt=""
            />
          </div>
          <div className="oneofOne01">
            <div>
              <img
                src={`${process.env.REACT_APP_API_URL}/${image02}`}
                alt=""
                className="oneofOne1"
              />
            </div>
            <div>
              <img
                src={`${process.env.REACT_APP_API_URL}/${image03}`}
                alt=""
                className="oneofOne2"
              />
            </div>
          </div>
        </div>
        <div className="oneofTwo gap-3">
          <img
            src={`${process.env.REACT_APP_API_URL}/${image04}`}
            alt=""
            className="oneofTwo-img"
          />
        </div>
        <div className="gap-3 third-column">
          <div>
            <img
              src={`${process.env.REACT_APP_API_URL}/${image05}`}
              className="oneofThree1"
              alt=""
            />
          </div>
          <div className="">
            <img
              src={`${process.env.REACT_APP_API_URL}/${image06}`}
              alt=""
              className="oneofThree2"
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Gallery;
