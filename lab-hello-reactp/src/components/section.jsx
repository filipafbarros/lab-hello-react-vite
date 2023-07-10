import React from "react";

const Section = ({ imgUrl, title, text }) => {
  return (
    <div>
      <img src={imgUrl}></img>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Section;
