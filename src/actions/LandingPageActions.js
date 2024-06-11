import axios from "axios";
import {
  LANDING_PAGE_ALL_SCHOOL_REQUEST,
  LANDING_PAGE_ALL_SCHOOL_SUCCESS,
  LANDING_PAGE_ALL_SCHOOL_FAIL,
  LANDING_PAGE_LATEST_EVENT_REQUEST,
  LANDING_PAGE_LATEST_EVENT_SUCCESS,
  LANDING_PAGE_LATEST_EVENT_FAIL,
  LANDING_PAGE_TESTIMONIAL_REQUEST,
  LANDING_PAGE_TESTIMONIAL_SUCCESS,
  LANDING_PAGE_TESTIMONIAL_FAIL,
  LANDING_PAGE_ABOUT_REQUEST,
  LANDING_PAGE_ABOUT_SUCCESS,
  LANDING_PAGE_ABOUT_FAIL,
  LANDING_PAGE_FEATURE_REQUEST,
  LANDING_PAGE_FEATURE_SUCCESS,
  LANDING_PAGE_FEATURE_FAIL,
  LANDING_PAGE_GALLERY_REQUEST,
  LANDING_PAGE_GALLERY_SUCCESS,
  LANDING_PAGE_GALLERY_FAIL,
} from "../constants/LandingPageContants";

export const aboutUsAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_ABOUT_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/about-us-lp/`
    );
    dispatch({ type: LANDING_PAGE_ABOUT_SUCCESS, payload: data });
    console.log(data, "Data from AboutUs");
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_ABOUT_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const galleryAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_GALLERY_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/best-campus/`
    );
    dispatch({ type: LANDING_PAGE_GALLERY_SUCCESS, payload: data });
    console.log(data, "Data from Gallery");
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_GALLERY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const featureAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_FEATURE_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/our-best-features/`
    );
    dispatch({ type: LANDING_PAGE_FEATURE_SUCCESS, payload: data });
    console.log(data, "Data from AboutUs");
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_FEATURE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const latestEventAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_LATEST_EVENT_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/latest-events`
    );
    dispatch({ type: LANDING_PAGE_LATEST_EVENT_SUCCESS, payload: data });
    console.log(data, "Data from Latest Events");
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_LATEST_EVENT_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const allSchoolsListAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_ALL_SCHOOL_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/school/list`
    );
    dispatch({ type: LANDING_PAGE_ALL_SCHOOL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_ALL_SCHOOL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const testimonialsAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_TESTIMONIAL_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/testimonials`
    );
    dispatch({ type: LANDING_PAGE_TESTIMONIAL_SUCCESS, payload: data });
    console.log(data, "LANDING_PAGE_TESTIMONIAL_SUCCESS");
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_TESTIMONIAL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
