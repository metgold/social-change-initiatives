import React from 'react';

import styled from 'styled-components';
import { signInWithGoogle } from '../../../firebase/Firebase.utils';
import CustomButton from '../../custom-button/CustomButton';
import FormInput from '../form_input/Form_input';
import './Login.scss';
// import { signInWithGoogle } from '../firebase/Firebase.utils'


class LogIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <React.Fragment>
                <SignIn>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                        
                        <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                        

                        <CustomButton type='submit' > Sign in </CustomButton>
                        <CustomButton onclick={signInWithGoogle} > {' '} Sign in with Google{' '} </CustomButton>
                    </form>
                </SignIn>
            </React.Fragment>
        )
    }
}

export default LogIn
const SignIn = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;



`
