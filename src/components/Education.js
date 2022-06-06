import React from "react";
import School from "./School.js";

const Education = () => {
  return (
    <section className="education-container" id="education">
      <div className="content-container education-content-container">
        <h1 className="title education-title title-white">Education</h1>
        <h2 className="sub-title sub-title-white education-sub-title">
          I performed well at school and continued my education until age 20,
          finishing with a FdA in Digital Media.
        </h2>
        <School
          school="Newcastle College"
          subject="Foundation Degree - Digital Media"
          year="2014-2016"
        />
        <School
          school="Newcastle College"
          subject="Level 3 Diploma - Graphic Design"
          year="2011-2013"
        />
        <School
          school="Boldon Comprehensive"
          subject="10 GCSE's grades A-C"
          year="2007-2011"
        />
      </div>
    </section>
  );
};

export default Education;
