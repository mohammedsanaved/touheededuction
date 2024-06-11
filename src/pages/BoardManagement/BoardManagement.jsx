import React, { useEffect } from "react";
import { BoardManagementStyles } from "./BoardManagementStyles.js";
import HeaderTwo from "../../components/HeaderTwo";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import FooterNew from "../../components/FooterNew/FooterNew.jsx";
import { useDispatch, useSelector } from "react-redux";
import { boardOfManagmentAction } from "../../actions/BoardofManagmentAction.js";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";

const BoardManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardOfManagmentAction());
  }, [dispatch]);
  const BoardList = useSelector((state) => state.boardManagementList);
  const { managementList, loading, error } = BoardList;
  console.log(BoardList, "BoardList");

  const bg = "./assets/images/eventspageimage.png";

  return (
    <BoardManagementStyles>
      <HeaderNew2 />

      <BannerSection bg_image={bg} />

      <BreadCrumbs/>

      <h1 className="page-title">Board Of Management</h1>

      <div className="board-container d-flex mx-auto flex-wrap justify-content-center">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          managementList?.rows?.map((item, i) => (
            <div className="board-member-div" key={i}>
              <img
                src={`${process.env.REACT_APP_API_URL}/${item.image}`}
                alt={item.name}
                className="member-img"
              />

              <h3 className="member-name">{item.name}</h3>
              <h3 className="member-title">{item.title}</h3>

              <h5 className="member-description">{item.description}</h5>
            </div>
          ))
        )}
      </div>

      <FooterNew />
    </BoardManagementStyles>
  );
};

export default BoardManagement;
