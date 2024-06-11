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

export const schoolListReducer = (
  state = { schools: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case SCHOOL_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case SCHOOL_LIST_SUCCESS:
      return { ...state, loading: false, schools: action.payload };
    case SCHOOL_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const schoolIndividualDetailReducer = (
  state = { school: {} },
  action
) => {
  switch (action.type) {
    case SCHOOL_DETAIL_REQUEST:
      return { loading: true, ...state };

    case SCHOOL_DETAIL_SUCCESS:
      return { loading: false, school: action.payload };

    case SCHOOL_DETAIL_FAIL:
      return { loading: false, error: action.payload, school: [] };

    default:
      return state;
  }
};
export const schoolAboutUsReducer = (state = { school: {} }, action) => {
  switch (action.type) {
    case SCHOOL_ABOUT_US_REQUEST:
      return { loading: true, ...state };

    case SCHOOL_ABOUT_US_SUCCESS:
      return { loading: false, school: action.payload };

    case SCHOOL_ABOUT_US_FAIL:
      return { loading: false, error: action.payload, school: [] };

    default:
      return state;
  }
};
export const schoolAdmissionReducer = (
  state = { admissionDetail: {} },
  action
) => {
  switch (action.type) {
    case SCHOOL_ADMISSION_REQUEST:
      return { loading: true, ...state };

    case SCHOOL_ADMISSION_SUCCESS:
      return { loading: false, admissionDetail: action.payload };

    case SCHOOL_ADMISSION_FAIL:
      return { loading: false, error: action.payload, admissionDetail: [] };

    default:
      return state;
  }
};
