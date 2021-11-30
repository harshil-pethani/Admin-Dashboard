import './createUser.scss';
import { CloudUpload } from '@material-ui/icons'

const CreateUser = () => {
    return (
        <div className="createUser">
            <h2 className="pageTitle">
                Create User
            </h2>
            <form className="newUserForm" action="">
                <div className="formItem">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input id="username" type="text" placeholder="johndeep123" />
                </div>
                <div className="formItem">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="john@gmail.com" />
                </div>
                <div className="formItem">
                    <label htmlFor="firstname">
                        Firstname
                    </label>
                    <input id="firstname" type="text" placeholder="John" />
                </div>
                <div className="formItem">
                    <label htmlFor="lastname">
                        Lastname
                    </label>
                    <input id="lastname" type="text" placeholder="Deep" />
                </div>
                <div className="formItem">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="Jj5498@#" />
                </div>
                <div className="formItem">
                    <label htmlFor="phone">
                        Phone
                    </label>
                    <input id="phone" type="tel" pattern="[0-9]{10}" placeholder="9876543210" />
                </div>
                <div className="formItem">
                    <label htmlFor="address">
                        Address
                    </label>
                    <input id="address" type="text" placeholder="New York | USA" />
                </div>
                <div className="formItem">
                    <label htmlFor="dob">
                        Date Of Birth
                    </label>
                    <input id="dob" type="date" />
                </div>
                <div className="formItem profile">
                    <label htmlFor="avatar">
                        Profile Pic
                    </label>
                    <input id="avatar" type="file" style={{ display: "none" }} />
                    <label className="iconLabel" htmlFor="avatar">
                        <CloudUpload className="icon" />
                    </label>
                </div>
                <div className="formItem">
                    <label>
                        Gender
                    </label>
                    <div className="genderBtns">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="btnContainer">
                    <button type="submit" className="createBtn">
                        Create
                    </button>
                </div>
                {/* <div className="formItem">
                    <label htmlFor="">Active</label>
                    <select className="status" name="status" id="active" name="active">
                        <option value="yes">
                            Yes
                        </option>
                        <option value="no">
                            No
                        </option>
                    </select>
                </div> */}
            </form>
        </div>
    )
}

export default CreateUser
