import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_DETAIL_REQUEST,
  EVENT_DETAIL_SUCCESS,
  EVENT_DETAIL_FAIL,
} from "../constants/eventConstants";

// export const eventListReducer = (
//   state = { events: [], loading: false, error: null },
//   action
// ) => {
//   switch (action.type) {
//     case EVENT_LIST_REQUEST:
//       return { ...state, loading: true, error: null };

//     case EVENT_LIST_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         events: action.payload,
//       };

//     case EVENT_LIST_FAIL:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };
const initialState = {
  events: [],
  loading: false,
  error: null,
  // page: 1, // Initialize page to 1
  // limit: 2, // Initialize limit (items per page)
};

export const eventListReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case EVENT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,

        // totalPages: action.payload.totalPages,
        // page: action.payload.page,
        // limit: action.payload.limit, // Store the limit value from the action payload
      };
    case EVENT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventDetailReducer = (state = { event: {} }, action) => {
  switch (action.type) {
    case EVENT_DETAIL_REQUEST:
      return { loading: true, ...state };

    case EVENT_DETAIL_SUCCESS:
      return { loading: false, event: action.payload };

    case EVENT_DETAIL_FAIL:
      return { loading: false, error: action.payload, event: [] };

    default:
      return state;
  }
};
