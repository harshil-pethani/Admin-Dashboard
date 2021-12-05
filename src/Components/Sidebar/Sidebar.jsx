import "./Sidebar.scss";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

export default function Sidebar({ activeSidebar, setActiveSidebar }) {
    return (
        <div className={activeSidebar ? "sidebar activeSidebar" : "sidebar"}>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className="sidebarListItem" to="/">
                                <LineStyle className="sidebarIcon" />
                                <span>
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/analytics">
                                <Timeline className="sidebarIcon" />
                                <span>
                                    Analytics
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/sales">
                                <TrendingUp className="sidebarIcon" />
                                <span>
                                    Sales
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className="sidebarListItem" to="/users">
                                <PermIdentity className="sidebarIcon" />
                                <span>
                                    Users
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/products">
                                <Storefront className="sidebarIcon" />
                                <span>
                                    Products
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/transactions">
                                <AttachMoney className="sidebarIcon" />
                                <span>
                                    Transactions
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/reports">
                                <BarChart className="sidebarIcon" />
                                <span>
                                    Reports
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className="sidebarListItem" to="/mail">
                                <MailOutline className="sidebarIcon" />
                                <span>
                                    Mail
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/feedback">
                                <DynamicFeed className="sidebarIcon" />
                                <span>
                                    Feedback
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/messages">
                                <ChatBubbleOutline className="sidebarIcon" />
                                <span>
                                    Messages
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className="sidebarListItem" to="/staffmanage">
                                <WorkOutline className="sidebarIcon" />
                                <span>
                                    Manage
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/staffanalytics">
                                <Timeline className="sidebarIcon" />
                                <span>
                                    Analytics
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/staffreports">
                                <Report className="sidebarIcon" />
                                <span>
                                    Reports
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}