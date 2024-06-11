import axios from "axios";

import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_DETAIL_REQUEST,
  EVENT_DETAIL_SUCCESS,
  EVENT_DETAIL_FAIL,
} from "../constants/eventConstants";

export const listEvent = (page, limit) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_LIST_REQUEST });

    const { data } = await axios.get(
      // `${process.env.REACT_APP_API_URL}/api/events/events-details`
      `${process.env.REACT_APP_API_URL}/api/events/events-details?page=${page}&limit=${limit}`
    );

    dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
    console.log(data, "API response from events");
  } catch (error) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const detailEvent = (id) => async (dispatch) => {
  console.log(id, "Id from DetailsEvents");
  try {
    dispatch({ type: EVENT_DETAIL_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/events/single-event/${id}`
    );

    dispatch({ type: EVENT_DETAIL_SUCCESS, payload: data });
    console.log(data, "changes from detailsEvents");
  } catch (error) {
    dispatch({
      type: EVENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
// /api/events/events-list/0078ea22-e420-479d-ac21-28b48d724c1e