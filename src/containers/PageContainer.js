import React from "react";
import "../styles/page-container.scss";
import SideBar from "../components/SideBar";
import DashBoard from "../components/DashBoard";
import WorkspaceSideBar from "../components/WorkspaceSideBar";

const PageContainer = props => {
  return (
    <div className="page-container">
      <WorkspaceSideBar />
      <SideBar />
      <DashBoard />
    </div>
  );
};

export default PageContainer;
