import React from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';

const PageContainer = props => {
  return (
    <div>
      <SideBar/>
      <DashBoard/>
    </div>
    )
}

export default PageContainer;