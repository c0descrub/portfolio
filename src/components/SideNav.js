import { React } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CodeIcon from "@mui/icons-material/Code";
import NavItem from "./NavItem";

const SideNav = () => {
  window.addEventListener("scroll", () => {
    const section = document.querySelectorAll("section");
    const navItem = document.querySelectorAll(".li-container");

    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    navItem.forEach((item) => item.classList.remove("active"));
    navItem[len].classList.add("active");
  });

  const homeIcon = <HomeIcon />;
  const aboutIcon = <PersonIcon />;
  const projectsIcon = <CodeIcon />;
  const workHistoryIcon = <WorkHistoryIcon />;
  const educationIcon = <HistoryEduIcon />;
  const contactIcon = <AlternateEmailIcon />;

  return (
    <>
      <nav className="side-nav">
        <ul>
          <NavItem
            link="#home"
            icon={homeIcon}
            id="homeButton"
            active="active"
          />
          <NavItem link="#about" icon={aboutIcon} id="aboutButton" />
          <NavItem link="#projects" icon={projectsIcon} id="projectsButton" />
          <NavItem link="#work" icon={workHistoryIcon} id="workButton" />
          <NavItem
            link="#education"
            icon={educationIcon}
            id="educationButton"
          />
          <NavItem link="#contact" icon={contactIcon} id="contactButton" />
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
