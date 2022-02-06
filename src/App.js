import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth , createUserProfileDocument} from './firebase/firebase.config.utils';
// import logo from './logo.svg';
import './App.css';

import { setCurrentUser } from './redux/user/user.actions';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component';



//  const HatsPage =(props)=>{
//   console.log(props)
//    return(
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );
//  }


class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state={
  //     currentUser:null
  //   }
  // }


  unSubscribeFromAuth= null;   // new method


  componentDidMount(){
    // will set the unSubscribeFromAuth to a method from the firebase auth
    // and when unSubscribeFromAuth is called it will clear the auth user and logout

    const {setCurrentUser}= this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async user => {
      //s console.log(user);
          if(user){
            const userRef = await createUserProfileDocument(user);
            // confirm fron the snapshot if the record was successfully save using the firestore listened onSnapshot

            userRef.onSnapshot(snapshot => {
              console.log(snapshot.data());
              setCurrentUser({
                
                  id:snapshot.id,
                  ...snapshot.data()
                
              })
            })
           // console.log(this.state);
          }

         setCurrentUser(user);
    
     // this.setState({currentUser:user});
    
    });

  }



  componentWillUnmount(){
    // calling this function will clear the signin user
    // this is called when the application unmounts
    this.unSubscribeFromAuth()
  }





  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path='/signIn' render={()=> this.props.currentUser? (<Redirect to='/' />): ( <SignInAndSignUpPage />) }/>
        </Switch>
      </div>
    
    );
  }
}

// set user the state of this module by calling the user.actions which inturns call and implement the user reducer to set the state
 const mapDispatchToprops =(dispatch)=>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
 });

 // this automatically make setCurrentUser action availible as props to this class or module
 //instead of this.setState({currentUser:user})
 //you can use this.props.setCurrentUser(user) // this user action since already registered with connect will call the user reducers anytime it is set to update the redux user state

// the redux loger will log every reducer call when the reducer action is called using this.props.setCurrentUser(user) showing the previous state, the action call and the new state

//mapDispatchToprops to set the set and mapStateToProps to access the state from the reducers

const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
});

export default connect(mapStateToProps,mapDispatchToprops )(App);
