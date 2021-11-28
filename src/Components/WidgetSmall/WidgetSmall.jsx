import "./Small.scss";
import { Visibility } from "@material-ui/icons";
import { userRows } from '../../Data';

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
                            <img src={element.avatar} alt="" className="userImg" />
                            <div className="userInfo">
                                <span className="username">
                                    {element.username}
                                </span>
                                <span className="fullname">
                                    Jannat Zubair Rehmani
                                </span>
                            </div>
                            <button className="smallBtn">
                                <Visibility className="icon" />
                                View
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WidgetSmall
