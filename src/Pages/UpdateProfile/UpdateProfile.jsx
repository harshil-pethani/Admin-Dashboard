import './updateProfile.scss';
import { CalendarToday, LocationCityOutlined, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { adminData } from '../../Data';


const UpdateProfile = ({ activeSidebar }) => {

    return (
        <div className={activeSidebar ? "updateProfile pageContent" : "updateProfile"}>
            <div className="userTitleContainer">
                <h2 className="title">
                    Update Admin Profile
                </h2>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={adminData.avatar} alt="" />

                        <div className="userInfo">
                            <span className="username">
                                {adminData.username}
                            </span>
                            <span className="fullname">
                                {adminData.fullname}
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
                                {adminData.username}
                            </span>
                        </div>
                        <div className="infoField">
                            <CalendarToday className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                {adminData.dob}
                            </span>
                        </div>
                        <span className="title">
                            Contact Details
                        </span>

                        <div className="infoField">
                            <PhoneAndroid className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                +91 {adminData.mobile}
                            </span>
                        </div>
                        <div className="infoField">
                            <MailOutline className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                {adminData.email}
                            </span>
                        </div>
                        <div className="infoField">
                            <LocationCityOutlined className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                {adminData.address}
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
                                <input id="username" type="text" placeholder={adminData.username} />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="fullname">
                                    Full Name
                                </label>
                                <input id="fullname" type="text" placeholder={adminData.fullname} />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input id="email" type="email" placeholder={adminData.email} />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="phone">
                                    Phone
                                </label>
                                <input id="phone" type="tel" placeholder={adminData.mobile} />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="address">
                                    Address
                                </label>
                                <input id="address" type="text" placeholder={adminData.address} />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={adminData.avatar} alt="" />

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

export default UpdateProfile
