import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div>
      <Spinner
        animation="border"
        variant="dark"
        role="status"
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      >
        {" "}
      </Spinner>
    </div>
  );
}

export default Loader;
