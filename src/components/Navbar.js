import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import styled from 'styled-components'

function Navbar() {
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
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Values
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Media
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Donate
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                        </li>
                    </ul>
                </NavMenu>
                {button && <Button buttonStyle='btn--outline'>GET INVOLVED </Button>}
            </div>
          </NavBar> 
        </React.Fragment>
    )
}

export default Navbar

const NavBar = styled.button`
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    min-height: 60px;
    display: flex;
    position: fixed;
    justify-content: flex-start;
    padding: 10px 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const NavMenu = styled.button`
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    min-height: auto;
    display: flex;
    justify-content: start;
    border: none;
    align-items: space-around ;
    align-self: auto;
`