import React from 'react';
import { auth } from '../../firebase/Firebase.utils';
import HeaderG from '../header/Header';
// import Navbar from '../Navbar';
import "./Get_involved.scss"
import LogIn from './login_signup/Login';



// import Footer from '../Footer';



class GetInvolved extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
            return (
        <React.Fragment>
                <div className="get_involved">
                    <HeaderG currentUser={this.state.currentUser}/>
                   { // <Navbar/>
                    <LogIn/>
                    /* <Footer/> */}
                </div>
        </React.Fragment>
        )
    }
    }

 

export default GetInvolved

