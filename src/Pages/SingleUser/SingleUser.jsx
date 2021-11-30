import './singleUser.scss';
import { CalendarToday, LocationCityOutlined, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { userRows } from '../../Data';
import { useLocation } from 'react-router-dom';


const SingleUser = ({ id }) => {
    const location = useLocation();
    const userId = location.pathname.split('/')[2];

    let user = userRows.filter(element => element.id == userId)[0]
    return (
        <div className="singleUser">
            <div className="userTitleContainer">
                <h2 className="ti">
                    Edit User
                </h2>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={user.avatar} alt="" />

                        <div className="userInfo">
                            <span className="username">
                                {user.username}
                            </span>
                            <span className="fullname">
                                {user.fullname}
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="title">
                            Account Details
                        </span>
                        <div className="infoField">
                            <PermIdentity className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                {user.username}
                            </span>
                        </div>
                        <div className="infoField">
                            <CalendarToday className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                {user.dob}
                            </span>
                        </div>
                        <span className="title">
                            Contact Details
                        </span>

                        <div className="infoField">
                            <PhoneAndroid className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                +1 {user.mobile}
                            </span>
                        </div>
                        <div className="infoField">
                            <MailOutline className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                {user.email}
                            </span>
                        </div>
                        <div className="infoField">
                            <LocationCityOutlined className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                {user.address}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="updateTitle">
                        Edit
                    </span>
                    <form>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="username">
                                    Username
                                </label>
                                <input id="username" type="text" placeholder={user.username} />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="fullname">
                                    Full Name
                                </label>
                                <input id="fullname" type="text" placeholder={user.fullname} />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input id="email" type="email" placeholder={user.email} />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="phone">
                                    Phone
                                </label>
                                <input id="phone" type="tel" placeholder={user.mobile} />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="address">
                                    Address
                                </label>
                                <input id="address" type="text" placeholder={user.address} />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={user.avatar} alt="" />

                                <input style={{ display: "none" }} type="file" id="uploadImg" />
                                <label htmlFor="uploadImg">
                                    <Publish className="uploadIcon" />
                                </label>
                            </div>
                            <button className="updateBt">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleUser
