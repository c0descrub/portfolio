import React from "react";
import { Button } from "@mui/material";

const Project = ({ title, content, img, technologies, link, source }) => {
  return (
    <div className="desktop-height">
      <div className="project-card">
        {/* <img className="hide-img" src={img} alt={title}></img> */}
        <div className="project-container">
          <div
            className="project-thumbnail"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="project-content content">
            <h2 className="project-title sub-title">{title}</h2>
            <p>{content}</p>
            <ul className="project-technologies">
              {technologies.map((tech) => (
                <li key={Math.random(10)}>{tech}</li>
              ))}
            </ul>
            <div className="buttons-container">
              <a
                className="button-link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  className="button"
                  style={{
                    backgroundColor: "lightcoral",
                    marginRight: "10px",
                  }}
                >
                  Visit Site
                </Button>
              </a>
              <a
                className="button-link"
                href={source}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  className="button"
                  style={{ backgroundColor: "lightcoral" }}
                >
                  View Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
