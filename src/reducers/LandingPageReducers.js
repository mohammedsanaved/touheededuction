import {
  LANDING_PAGE_ABOUT_FAIL,
  LANDING_PAGE_ABOUT_REQUEST,
  LANDING_PAGE_ABOUT_SUCCESS,
  LANDING_PAGE_ALL_SCHOOL_FAIL,
  LANDING_PAGE_ALL_SCHOOL_REQUEST,
  LANDING_PAGE_ALL_SCHOOL_SUCCESS,
  LANDING_PAGE_FEATURE_FAIL,
  LANDING_PAGE_FEATURE_REQUEST,
  LANDING_PAGE_FEATURE_SUCCESS,
  LANDING_PAGE_GALLERY_FAIL,
  LANDING_PAGE_GALLERY_REQUEST,
  LANDING_PAGE_GALLERY_SUCCESS,
  LANDING_PAGE_LATEST_EVENT_FAIL,
  LANDING_PAGE_LATEST_EVENT_REQUEST,
  LANDING_PAGE_LATEST_EVENT_SUCCESS,
  LANDING_PAGE_TESTIMONIAL_FAIL,
  LANDING_PAGE_TESTIMONIAL_REQUEST,
  LANDING_PAGE_TESTIMONIAL_SUCCESS,
} from "../constants/LandingPageContants";
export const aboutUsReducer = (
  state = { aboutus: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case LANDING_PAGE_ABOUT_REQUEST:
      return { ...state, loading: true, error: null };
    case LANDING_PAGE_ABOUT_SUCCESS:
      return { ...state, loading: false, aboutus: action.payload };
    case LANDING_PAGE_ABOUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const featureReducer = (
  state = { feature: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case LANDING_PAGE_FEATURE_REQUEST:
      return { ...state, loading: true, error: null };
    case LANDING_PAGE_FEATURE_SUCCESS:
      return { ...state, loading: false, feature: action.payload };
    case LANDING_PAGE_FEATURE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const galleryReducer = (
  state = { gallery: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case LANDING_PAGE_GALLERY_REQUEST:
      return { ...state, loading: true, error: null };
    case LANDING_PAGE_GALLERY_SUCCESS:
      return { ...state, loading: false, gallery: action.payload };
    case LANDING_PAGE_GALLERY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const latestEventReducer = (
  state = { latestevent: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case LANDING_PAGE_LATEST_EVENT_REQUEST:
      return { ...state, loading: true, error: null };
    case LANDING_PAGE_LATEST_EVENT_SUCCESS:
      return { ...state, loading: false, latestevent: action.payload };
    case LANDING_PAGE_LATEST_EVENT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allSchoolsListReducer = (
  state = { allschools: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case LANDING_PAGE_ALL_SCHOOL_REQUEST:
      return { ...state, laoding: true, error: null };
    case LANDING_PAGE_ALL_SCHOOL_SUCCESS:
      return { ...state, loading: false, allschools: action.payload };
    case LANDING_PAGE_ALL_SCHOOL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const testimonialsReducer = (
  state = { testimonials: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case LANDING_PAGE_TESTIMONIAL_REQUEST:
      return { ...state, loading: true, error: null };
    case LANDING_PAGE_TESTIMONIAL_SUCCESS:
      return { ...state, loading: false, testimonials: action.payload };
    case LANDING_PAGE_TESTIMONIAL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
