import React from 'react';
import './sidebarRow.css';


function SidebarRow({Icon , title}) {
    return (
        <div className="sidebarRow">
            <Icon className="sidebarRow__icon" />
            <div className="sidebarRow__title">{title}</div>
        </div>
    )
}

export default SidebarRow
