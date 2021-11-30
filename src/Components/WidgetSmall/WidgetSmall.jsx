import "./Small.scss";
import { Visibility } from "@material-ui/icons";
import { userRows } from '../../Data';
import { NavLink } from "react-router-dom";

const WidgetSmall = () => {
    return (
        <div className="widgetSmall">
            <span className="title">
                New Joined Members
            </span>
            <ul className="userList">
                {
                    userRows.map((element) =>
                    (
                        <li className="userListItem" key={element.id}>
                            <div className="AvatarName">
                                <img src={element.avatar} alt="" className="userImg" />
                                <div className="userInfo">
                                    <span className="username">
                                        {element.username}
                                    </span>
                                    <span className="fullname">
                                        {element.fullname}
                                    </span>
                                </div>
                            </div>
                            <NavLink className="link" to={"/users/" + element.id}>
                                <button className="smallBtn">
                                    <Visibility className="icon" />
                                    View
                                </button>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WidgetSmall
