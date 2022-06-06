import React from "react";

const Job = ({ role, company, year, description, id }) => {
  const jobs = ["listening", "cr", "cs", "bt"];
  const current = { id };

  console.log(current);
  return (
    <div className="job-container" id={id}>
      <h2 className="job-role">{role}</h2>
      <h2 className="company">{company}</h2>
      <em>
        <p className="content year">{year}</p>
      </em>
      <p className="content job-description">{description}</p>
    </div>
  );
};

export default Job;
