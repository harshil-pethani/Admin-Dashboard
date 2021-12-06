import './Topbar.scss';
import React from 'react';
import { NotificationsNone, Language, Settings, Menu } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';

const Topbar = ({ activeSidebar, setActiveSidebar }) => {
    return (
        <div className={activeSidebar ? "topbar activeSidebar" : "topbar"}>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="hamburger">
                        <Menu className="icon" onClick={() => { setActiveSidebar(!activeSidebar) }} />
                    </div>
                    <NavLink to="/" className="link">
                        <span className="logo">HpAdmin</span>
                    </NavLink>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <NavLink to="/updateprofile" className="link">
                        <img src="https://wallpapercave.com/wp/wp2030093.jpg" alt="" className="topAvatar" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Topbar
