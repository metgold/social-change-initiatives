import React from 'react';
import './Contact_us.scss';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';


function Contact_us() {
    return (
        <React.Fragment>
            <Navbar/>
            <Wrapper >
                <h1>Contact Us</h1>
                <p className="sub-title">lorem ipsum </p>
                <div id="contact-container">
                    <div className="contact-info">
                            <h4>
                                Contact Information
                            </h4>
                            <p>Fill up the form and then click send</p>
                            <div className="icon-text">
                                <i class="fas fa-phone-square-alt"></i>
                                <span>0801234***</span>
                            </div>
                            <div className="icon-text">
                                <i class="far fa-envelope"></i>
                                <span>admin@sochin.com; socialchangeinitiative@gmail.com</span>
                            </div>
                            <div className="icon-text">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>office 1*8, abcd* plaza, alphabet state</span>
                            </div>
                            <div className="social-media">
                                <a href="hhh" className="icon-circle">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="hhh" className="icon-circle">
                                <i class="fab fa-twitter"></i>
                                </a>
                                <a href="hhh" className="icon-circle">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="hhh" className="icon-circle">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                    </div>
                    <form>
                        <div className="col">
                        
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>E-Mail</label>
                                <input type="email" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" />
                            </div>
                       </div>
                            <div className="col">
                                <div className="form-group solo">
                                    <label className="label">Message</label>
                                    <textarea>Message</textarea>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group solo right">
                                    <button className="primary">Send Message</button>
                                </div>
                            </div>
                    </form>
                </div>
            </Wrapper>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact_us

const Wrapper = styled.div`
    height: 100vh;
    width: 80%;
    margin: auto;
    margin-top: 120px;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
    background-image: url('https://media.istockphoto.com/photos/blue-background-picture-id157571423?k=20&m=157571423&s=612x612&w=0&h=GxSD_uRBNlBtsvXo54kGstPong-zzqKR545fF1Y5Mws=');
    background-size: cover;
    @media (max-width: 760px) {
                    padding: 0 5px
                }
    
`
