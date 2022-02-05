import React from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.config.utils';

import './sign-up.styles.scss';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }


    handleSubmit = async (e)=>{
        e.preventDefault();
        // create the user in fire store
        const  {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword)
        {
            alert('Password does not match');
            return;
        }

        // since password matches
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            // once use have been created. create their record in firestore
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange =(e)=>{
        const {name, value} = e.target;
        this.setState({[name]: value});
    }



    render(){

      const  {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-in">
                
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
            </div>
        );
    }
}

export default SignUp;