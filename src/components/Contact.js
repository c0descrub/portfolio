import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="content-container contact-content-container">
        <div className="center-me">
          <h1 className="title contact-title">Get in touch</h1>
          <h2 className="sub-title contact-sub-title">
            I look forward to hearing from you!
          </h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <a
              className="contact-link mail"
              href="mailto:jordanjames1095@googlemail.com"
            >
              <MailOutlineIcon sx={{ fontSize: "50px" }} />
            </a>
            <a
              className="contact-link linkedin"
              href="https://www.linkedin.com/in/jordan-smith-533704a6/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "50px" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
