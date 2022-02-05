import React from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {signInWithGoogle} from '../../firebase/firebase.config.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleChange=(e)=>{
       const {name, value} = e.target;
       this.setState({[name]:value},()=>{
       });
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:'', password:''});
    }
    handleGoogleSubmit=(e)=>{
        e.preventDefault();
       
    }

    render(){
        return (
           <div className="sign-in">
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>
               <form action="">
                   <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} id="" label="Email" />
                   <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} id="" label="Password" />
                   <div className="buttons">
                    <Button type="submit" onClick={this.handleSubmit} >Login Now</Button>
                    <input className='custom-button google-button' onClick={signInWithGoogle}  type="button" value="Sign in with Google"  />
                   </div>
                  
               </form>
           </div> 
        );

       
    }
} 

export default SignIn;