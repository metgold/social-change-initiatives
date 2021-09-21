import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/Firebase.utils';

const HeaderG = ({ currentUser }) => (
            <div className='header'>
                <Link className='logo-container' to="/">
                <i className=' logo fab fa-typo3' />
                </Link>
                <div className='options'>
                    <Link className='option' to='/src/components/pages/Donate.js'>Donation</Link>
                    <Link className='option' to='/src/components/pages/Contact_us.js'>Contact us</Link>
                </div>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/src/components/pages/login_signup/Login.jsx' ></Link>
                }
            </div> 
        )

export default HeaderG
