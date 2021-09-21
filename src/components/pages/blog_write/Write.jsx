import React from "react"
import Topbar from "../blog_topbar/Topbar"
import "./Write.scss"

export default function Write() {
    return (
        <React.Fragment>
            <Topbar/>
            <div className="write">
                    <img className="writeImg" src="/images/img-3.jpg" alt=""/>
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            < i className="writeIcon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                        <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Tell your story ..." type="text" className="writeInput writeText">
                        </textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>
                </form>
            </div>
        </React.Fragment>
    )
}
