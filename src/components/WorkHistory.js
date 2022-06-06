import React from "react";
import Job from "./Job";
import { Button } from "@mui/material";

const WorkHistory = () => {
  const sentimentSpecialistDescription =
    "As a Community Sentiment Specialist I am part of the team tasked with coordinating the weekly, monthly and ad-hoc community sentiment reports for various Ubisoft & competitor brands. My responsibilities include but are not limited to: Ensuring reporting tasks are assigned to staff, making sure reports are of the right standard, consistency and delivered on time, answering to emails from all levels of the business, leading & attending meetings with key stakeholders to discuss reporting plans and schedules as well as liasing with various other departments both inside and outside of Ubisoft to ensure the smooth operation of the team.";
  const communityRepDescription =
    "The community Representative role involves acting as the bridge between our players and the development teams for our games. My duties included monitoring both owned and non owned social media platforms for various Ubisoft titles and reporting feedback and emerging issues to the relevent teams, engaging with players on social media, answering their questions, scheduling social posts, attending gaming conferences and expos, assisting the community manager in executing their social media plans and more. I was also responsible for the delivery of Community Sentiment Reports which comprise of manually quantified community sentiment data, gathered from our web crawler";
  const customerSupportDescription =
    "As a Customer Support Agent I was responsible for handling direct, live interactions with our players who needed help for a variety of reasons. I handled live interations via both live chat, and telephone. I was requried to assist players in the first contact wherever possible or, at least as quickly as I could. I handled issues ranging from account recovery to in-depth PC technical help and troubleshooting.";
  const retentionsAdvisorDescription =
    "The role of a Retentions Advisor for BT involved handling calls from customers who had expressed a desire to terminate their services. My job was to persuade customers to retain service, as well as upsell them with additional services to improve the perceived value of their package deal. I needed to maintain high knowledge of all of BT's products and services, demonstrate exceptional customer service skills, ensure all required legal information was provided to the customer during the call and ensure handling times were as low as possible to deal with the maximum throughput I could.";
  return (
    <>
      <section className="work-history-container" id="work">
        <div className="work-history-content-container content-container">
          <div className="work-container">
            <h1 className="title work-history-title">Work History</h1>
            <h2 className="sub-title work-history-sub-title">
              Since 2016 I have worked consistently in various roles. The
              majority of this time has been spent working for my current
              employer, Ubisoft.
            </h2>
            <a className="button-link" href="#listening">
              <Button variant="contained" className="button hidden">
                Click to begin
              </Button>
            </a>
          </div>
          <div className="job-container" id="listening">
            <h2 className="job-role">Community Sentiment Specialist</h2>
            <h2 className="company">Ubisoft</h2>
            <em>
              <p className="content year">2021 - Current</p>
            </em>
            <p className="content job-description">
              {sentimentSpecialistDescription}
            </p>
            <a className="button-link" href="#cr">
              <Button variant="contained" className="button hidden">
                Next Job
              </Button>
            </a>
          </div>
          <div className="job-container" id="cr">
            <h2 className="job-role">Community Representative</h2>
            <h2 className="company">Ubisoft</h2>
            <em>
              <p className="content year">2019 - 2021</p>
            </em>
            <p className="content job-description">{communityRepDescription}</p>
            <a className="button-link" href="#cs">
              <Button variant="contained" className="button hidden">
                Next Job
              </Button>
            </a>
          </div>
          <div className="job-container" id="cs">
            <h2 className="job-role">Customer Support Agent</h2>
            <h2 className="company">Ubisoft</h2>
            <em>
              <p className="content year">2017 - 2019</p>
            </em>
            <p className="content job-description">
              {customerSupportDescription}
            </p>
            <a className="button-link" href="#bt">
              <Button variant="contained" className="button hidden">
                Next Job
              </Button>
            </a>
          </div>
          <Job
            role="Retentions Advisor"
            company="BT"
            year="2016-2017"
            description={retentionsAdvisorDescription}
            id="bt"
          />
        </div>
      </section>
    </>
  );
};

export default WorkHistory;
