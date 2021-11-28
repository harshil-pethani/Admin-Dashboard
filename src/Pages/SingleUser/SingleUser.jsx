import './singleUser.scss';
import { CalendarToday, LocationCityOutlined, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'

const SingleUser = () => {
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
                        <img src="https://www.imaginetricks.com/wp-content/uploads/2017/08/Cool-Profile-Pictures.jpg" alt="" />

                        <div className="userInfo">
                            <span className="username">
                                jannatzubair123
                            </span>
                            <span className="fullname">
                                Jannat Zubair Rehmani
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
                                jannatzubair123
                            </span>
                        </div>
                        <div className="infoField">
                            <CalendarToday className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                02.12.2001
                            </span>
                        </div>
                        <span className="title">
                            Contact Details
                        </span>

                        <div className="infoField">
                            <PhoneAndroid className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                +1 123 456 7890
                            </span>
                        </div>
                        <div className="infoField">
                            <MailOutline className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                jannatzubair123@gmail.com
                            </span>
                        </div>
                        <div className="infoField">
                            <LocationCityOutlined className="infoFieldIcon" />
                            <span className="infoFieldValue">
                                New York | USA
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
                                <input id="username" type="text" placeholder="jannatzubair123" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="fullname">
                                    Full Name
                                </label>
                                <input id="fullname" type="text" placeholder="Jannat Zubair Rehmani" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input id="email" type="email" placeholder="jannatzubair123@gmail.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="phone">
                                    Phone
                                </label>
                                <input id="phone" type="tel" placeholder="123 456 7890" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="address">
                                    Address
                                </label>
                                <input id="address" type="text" placeholder="New York | USA" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://i.pinimg.com/474x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg" alt="" />

                                <input style={{ display: "none" }} type="file" id="uploadImg" />
                                <label htmlFor="uploadImg">
                                    <Publish className="uploadIcon"/>
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
