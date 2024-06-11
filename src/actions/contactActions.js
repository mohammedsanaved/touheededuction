import axios from "axios";

import {
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL,
} from "../constants/contactConstants";

export const createContact =
  (
    nameValue,
    school,
    mobileNumberValue,
    messageValue,
    emailValue,
    classGradeValue
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: CONTACT_CREATE_REQUEST });

      let contact_data;
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      contact_data = {
        school: school,
        parents_name: nameValue,
        user_email: emailValue,
        mobile_no: mobileNumberValue,
        message: messageValue,
        class_grade: classGradeValue,
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/schools/contactus/`,
        contact_data,
        config
      );
      console.log(data, "Data");

      dispatch({ type: CONTACT_CREATE_SUCCESS, payload: data });
      console.log(data, "Data from ContactApi");
    } catch (error) {
      dispatch({
        type: CONTACT_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
