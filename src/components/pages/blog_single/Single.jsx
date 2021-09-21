import React from "react"
import Sidebar from "../blog_sidebar/Sidebar"
import SinglePost from "../blog_singlePost/singlePost"
import "./Single.scss"

export default function Single() {
    return (
        <React.Fragment>
            <div className="single">
                <SinglePost/>
                <Sidebar/>
            </div>
        </React.Fragment>
    )
}
