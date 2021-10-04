import "./Settings.scss"
import Sidebar from "../blog_sidebar/Sidebar"
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm"></form>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="/images/img-15.jpg" alt=""/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Sochin'/>
                    <label>Email</label>
                    <input type="email" placeholder='sochin@gmail.com'/>
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
            </div>
            <Sidebar/>
        </div>
    )
}
