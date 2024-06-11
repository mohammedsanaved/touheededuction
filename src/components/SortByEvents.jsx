import React, { useEffect } from "react";
// import styled from "styled-components";
import { Styles } from "./styles/SortByEvents";
// import { allSchoolsListAction } from "../actions/LandingPageActions";
// import { useDispatch, useSelector } from "react-redux";

const SortByEvents = ({ allschools, setSelectedSchoolId }) => {
  const options = [
    {
      value: "", // Set an empty value for the default option
      label: "All Schools", // Set the label for the default option
    },
    {
      value: "touheed-english-medium-school",
      label: "1) Touheed English Medium School",
    },
    {
      value: "touheed-girls-p.u-college",
      label: "2) Touheed Girls' P.U.College, Ganguli",
    },
    { value: "touheed-womens-college", label: "3) Touheed Womens College" },
    { value: "touheed-public-school", label: "4) Touheed Public School" },
    {
      value: "dina-school-for-special-education-rehabilitation",
      label: "5) 'DINA' - School for Special Education & Rehabilitation",
    },
  ];

  return (
    // <Styles>
    <Styles name="SchoolSearch" id="schoolsearch" className="w-100">
      <select onChange={(e) => setSelectedSchoolId(e.target.value)}>
        <option value="">All Schools</option>
        {allschools?.rows?.map((data) => (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
    </Styles>
    // </Styles>
  );
};

export default SortByEvents;
