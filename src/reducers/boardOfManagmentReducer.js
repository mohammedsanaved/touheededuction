import {
  BOARD_OF_MANAGEMENT_FAIL,
  BOARD_OF_MANAGEMENT_REQUEST,
  BOARD_OF_MANAGEMENT_SUCCESS,
} from "../constants/boardOfManagmentContants";

export const boardOfManagementReducer = (
  state = { managementList: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case BOARD_OF_MANAGEMENT_REQUEST:
      return { ...state, loading: true, error: null };

    case BOARD_OF_MANAGEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        managementList: action.payload,
      };

    case BOARD_OF_MANAGEMENT_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
