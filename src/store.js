import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { contactCreateReducer } from "./reducers/contactReducers";
import { eventListReducer, eventDetailReducer } from "./reducers/eventReducers";
import { staffListReducer } from "./reducers/staffReducers";
import {
  schoolAboutUsReducer,
  schoolAdmissionReducer,
  schoolIndividualDetailReducer,
  schoolListReducer,
} from "./reducers/schoolReducers";
import {
  aboutUsReducer,
  allSchoolsListReducer,
  featureReducer,
  galleryReducer,
  latestEventReducer,
  testimonialsReducer,
} from "./reducers/LandingPageReducers";
import { boardOfManagementReducer } from "./reducers/boardOfManagmentReducer";

const reducer = combineReducers({
  contactCreate: contactCreateReducer,
  eventList: eventListReducer,
  eventDetail: eventDetailReducer,
  staffList: staffListReducer,
  schoolList: schoolListReducer,
  latestEvent: latestEventReducer,
  allSchoolsList: allSchoolsListReducer,
  testimonialList: testimonialsReducer,
  schoolDetails: schoolIndividualDetailReducer,
  aboutUs: aboutUsReducer,
  featureList: featureReducer,
  galleryList: galleryReducer,
  schoolAboutUs: schoolAboutUsReducer,
  schoolAdmission: schoolAdmissionReducer,
  boardManagementList: boardOfManagementReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
