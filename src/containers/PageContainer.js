import React from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import WorkspaceSideBar from '../components/WorkspaceSideBar';

import styles from "../styles/PageContainer.modules.css";


const PageContainer = props => {
  return (
    <div className="pageContainer">
      <WorkspaceSideBar/>
      <SideBar/>
      <DashBoard/>
    </div>
    )
}

export default PageContainer;