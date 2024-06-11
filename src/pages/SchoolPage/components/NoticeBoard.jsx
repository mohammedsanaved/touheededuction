import React from "react";
import { Styles } from "../styles/NoticeBoard";
import { TiPin } from "react-icons/ti";

const NoticeBoard = ({ noticeboard }) => {
  return (
    <Styles>
      <div className="notice-board-title">Notice Board</div>
      <div className="notice-background mx-auto">
        <div className="inner_background mx-auto">
          <div className="PinIcon">
            <TiPin />
          </div>

          <div className="notice-scroll mx-auto">
            {noticeboard?.map((notice) => (
              <a
                href={`${process.env.REACT_APP_API_URL}/${notice.images[0].image}`}
                target="_blank"
                download={`${process.env.REACT_APP_API_URL}/${notice.images[0].image}`}
                key={notice.id}
                rel="noreferrer"
              >
                <div className="mb-3 notice-content">{notice.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default NoticeBoard;
