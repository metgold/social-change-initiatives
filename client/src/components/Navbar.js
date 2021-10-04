/* import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Navbar.css';
import styled from 'styled-components'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <React.Fragment>
          <NavBar>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    SOCIAL CHANGE INITIATIVE<i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <NavMenu>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/News' className='nav-links' onClick={closeMobileMenu}>
                            Meet Aspirant
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/Our_Team' className='nav-links' onClick={closeMobileMenu}>
                            Our team
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/Values' className='nav-links' onClick={closeMobileMenu}>
                            Values
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/Media' className='nav-links' onClick={closeMobileMenu}>
                            Media
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/Donate' className='nav-links' onClick={closeMobileMenu}>
                            Donate
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/Contact_us' className='nav-links' onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                        </li>
                    </ul>
                </NavMenu>
               
                {button && <Button className="btnnav" buttonStyle='btn--outline'>GET INVOLVED </Button>}
            </div>
          </NavBar> 
        </React.Fragment>
    )
}

export default Navbar

const NavBar = styled.button`
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 60px;
    width: 100%;
    display: flex;
    position: fixed;
    justify-content: flex-start;
    padding: 10px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const NavMenu = styled.button`
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    margin: 0px;
    min-height: 20px;
    display: flex;
    justify-content: start;
    border: none;
    align-items: space-around ;
    align-self: auto;
` */


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Navbar() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
        <Link className='link' to="/">
           {/* SOCIAL CHANGE INITIATIVE <i className='fab fa-typo3' /> */} <img src="/images/img-65.png" style={{height: "50px", width: "200px", }} alt="" />
        </Link>
            <Menu>
            <Link className='link' to='/News'>
                Meet Aspirant
            </Link>
            <Link className='link' to='/AboutUs'>
                About Us
            </Link>
            <Link className='link' to='/Value'>
                Values
            </Link>
            <Link className='link' to='/BoardOfTrustees'>
                Board of Trustees
            </Link>
            <Link className='link' to='/Our_Team'>
                Our Team
            </Link>
            <Link className='link' to='/Media'>
                Gallery
            </Link>
            
            <Link className='link' to='/Donate'>
                Donate
            </Link>
            </Menu>
            <RightMenu>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                  <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                <Link className='link' to='/'>
                    Home
                </Link>
                <Link className='link' to='/AboutUs'>
                    about us
                </Link>
                <Link className='link' to='/Value'>
                    values
                </Link>
                <Link className='link' to='/BoardOfTrustees'>
                    board of trustees
                </Link>
                <Link className='link' to='/Our_Team'>
                    Our team
                </Link>
                <Link className='link' to='/Values'>
                    Blog
                </Link>
                <Link className='link' to='/Login'>
                    Get involved
                </Link>
                <Link className='link' to='/Media'>
                Gallery
                </Link>
                <Link className='link' to='/Contact_us'>
                    Contact us
                </Link>
                <Link className='link' to='/Donate'>
                    Donate
                </Link>
                <Link className='link' to='/Question'>
                    Frequently asked questions
                </Link>           
            </BurgerNav>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 1; 
    
    .link {
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        color: #242424;
        padding: 0 10px;
        flex-wrap: nowrap;

        :hover {
            border-bottom: 4px solid rgba(45, 76, 160, 0.8);
            transition: all 0.2s ease-out;
  }
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    .link {
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        color: #242424;
        padding: 0 10px;
        flex-wrap: nowrap;
    } 
    
    @media (max-width: 768px) {
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
     a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    overflow-y: scroll;
    width: 300px;
    z-index:16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;

    .link {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        font-weight: 600;
    }
   
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`