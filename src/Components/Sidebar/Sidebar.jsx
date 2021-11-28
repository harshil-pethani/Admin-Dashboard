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
                            <NavLink className="sidebarListItem" exact to="/" activeClassName="active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/analytics" activeClassName="active">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/sales" activeClassName="active">
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
                            <NavLink className="sidebarListItem" exact to="/users" activeClassName="active">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/products" activeClassName="active">
                                <Storefront className="sidebarIcon" />
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/transactions" activeClassName="active">
                                <AttachMoney className="sidebarIcon" />
                                Transactions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/reports" activeClassName="active">
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
                            <NavLink className="sidebarListItem" exact to="/mail" activeClassName="active">
                                <MailOutline className="sidebarIcon" />
                                Mail
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/feedback" activeClassName="active">
                                <DynamicFeed className="sidebarIcon" />
                                Feedback
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/message" activeClassName="active">
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
                            <NavLink className="sidebarListItem" exact to="/staffmanage" activeClassName="active">
                                <WorkOutline className="sidebarIcon" />
                                Manage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/staffanalytics" activeClassName="active">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="sidebarListItem" exact to="/staffreports" activeClassName="active">
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