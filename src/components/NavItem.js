import React from "react";

const NavItem = ({ link, icon, id, active }) => {
  return (
    <a href={link}>
      <div className={`li-container ${active}`} id={id}>
        <li>{icon}</li>
      </div>
    </a>
  );
};

export default NavItem;
