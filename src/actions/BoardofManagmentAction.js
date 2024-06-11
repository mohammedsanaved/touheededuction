import axios from "axios";
import {
  BOARD_OF_MANAGEMENT_FAIL,
  BOARD_OF_MANAGEMENT_REQUEST,
  BOARD_OF_MANAGEMENT_SUCCESS,
} from "../constants/boardOfManagmentContants";

export const boardOfManagmentAction = () => async (dispatch) => {
  try {
    dispatch({ type: BOARD_OF_MANAGEMENT_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/reviews/boardmembers`
    );

    dispatch({ type: BOARD_OF_MANAGEMENT_SUCCESS, payload: data });
    console.log(data, "BOARD_OF_MANAGEMENT_SUCCESS");
  } catch (error) {
    dispatch({
      type: BOARD_OF_MANAGEMENT_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
