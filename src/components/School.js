import React from "react";

const School = ({ school, subject, year }) => {
  return (
    <div className="school-container">
      <h2 className="school">{school}</h2>
      <h2 className="subject">{subject}</h2>
      <em>
        <p className="content content-white school-year">{year}</p>
      </em>
    </div>
  );
};

export default School;
