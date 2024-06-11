import axios from "axios";
import {
  SCHOOL_ABOUT_US_FAIL,
  SCHOOL_ABOUT_US_REQUEST,
  SCHOOL_ABOUT_US_SUCCESS,
  SCHOOL_ADMISSION_FAIL,
  SCHOOL_ADMISSION_REQUEST,
  SCHOOL_ADMISSION_SUCCESS,
  SCHOOL_DETAIL_FAIL,
  SCHOOL_DETAIL_REQUEST,
  SCHOOL_DETAIL_SUCCESS,
  SCHOOL_LIST_FAIL,
  SCHOOL_LIST_REQUEST,
  SCHOOL_LIST_SUCCESS,
} from "../constants/schoolConstants";

export const schoolList = () => async (dispatch) => {
  try {
    dispatch({ type: SCHOOL_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/schools/school-getpost/list`
    );
    dispatch({ type: SCHOOL_LIST_SUCCESS, payload: data });
    console.log(data, "schoolListData");
  } catch (error) {
    dispatch({
      type: SCHOOL_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const schoolDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SCHOOL_DETAIL_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/schools/schooldetail/${id}`
    );
    dispatch({ type: SCHOOL_DETAIL_SUCCESS, payload: data });

    console.log("SCHOOL_DETAIL_SUCCESS", data);
  } catch (error) {
    dispatch({
      type: SCHOOL_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const schoolAboutUs = (id) => async (dispatch) => {
  try {
    dispatch({ type: SCHOOL_ABOUT_US_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/schools/schoolabout/${id}`
    );
    dispatch({ type: SCHOOL_ABOUT_US_SUCCESS, payload: data });

    console.log("SCHOOL_ABOUT_US_SUCCESS", data);
  } catch (error) {
    dispatch({
      type: SCHOOL_ABOUT_US_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const schoolAdmission = (id) => async (dispatch) => {
  try {
    dispatch({ type: SCHOOL_ADMISSION_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/admissions/school_info/${id}`
    );
    dispatch({ type: SCHOOL_ADMISSION_SUCCESS, payload: data });

    console.log("SCHOOL_ADMISSION_SUCCESS", data);
  } catch (error) {
    dispatch({
      type: SCHOOL_ADMISSION_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};