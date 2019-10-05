import React from 'react';

import styles from "../styles/WorkspaceSideBar.modules.css";

const WorkspaceSideBar = () => {
    const workspaces = ["workspaceOne", "workspaceTwo", "workspaceThree"]

    return (
        <div className="workspaceSideBar">
            <ul className="workspaceList">
                {workspaces.map(workspace => <li key={workspace}>{workspace}</li>)}
            </ul>
        </div>
    )
}

export default WorkspaceSideBar;