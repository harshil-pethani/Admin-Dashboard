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

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className="sidebarListItem" to="/">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/analytics">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/sales">
                                <TrendingUp className="sidebarIcon" />
                                Sales
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
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/products">
                                <Storefront className="sidebarIcon" />
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/transactions">
                                <AttachMoney className="sidebarIcon" />
                                Transactions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/reports">
                                <BarChart className="sidebarIcon" />
                                Reports
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
                                Mail
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/feedback">
                                <DynamicFeed className="sidebarIcon" />
                                Feedback
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/message">
                                <ChatBubbleOutline className="sidebarIcon" />
                                Messages
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className="sidebarListItem" to="/staffmanage">
                                <WorkOutline className="sidebarIcon" />
                                Manage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/staffanalytics">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" to="/staffreports">
                                <Report className="sidebarIcon" />
                                Reports
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}