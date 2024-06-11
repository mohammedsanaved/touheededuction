import React from 'react';

const GreenButton = (props) => {
  return (
    <>
      <button
        className={`${props.class_Name}`}
        style={{
          backgroundColor: "rgba(4, 156, 80, 1)",
          fontFamily: "Inter",
          fontSize: "20px",
          fontWeight: "500",
          color: "white",
          border: "none",
          padding: "10px",
          paddingLeft: "15px",
          paddingRight: "15px",
          borderRadius: "5px",
          marginTop: "25px",
          width: "auto",
          textAlign: "center",
        }}
      >
        {props.text}
      </button>
    </>
  );
}

export default GreenButton;