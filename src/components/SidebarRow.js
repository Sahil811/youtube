import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ title, Icon, active }) => {
  return (
    <div className={`sidebarRow ${active && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
