import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth , createUserProfileDocument} from './firebase/firebase.config.utils';
// import logo from './logo.svg';
import './App.css';



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
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }


  unSubscribeFromAuth= null;   // new method


  componentDidMount(){
    // will set the unSubscribeFromAuth to a method from the firebase auth
    // and when unSubscribeFromAuth is called it will clear the auth user and logout
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async user => {
      //s console.log(user);
          if(user){
            const userRef = await createUserProfileDocument(user);
            // confirm fron the snapshot if the record was successfully save using the firestore listened onSnapshot

            userRef.onSnapshot(snapshot => {
              console.log(snapshot.data());
              this.setState({
                currentUser: {
                  id:snapshot.id,
                  ...snapshot.data()
                }
              })
            })
           // console.log(this.state);
          }

          this.setState({currentUser: user});
    
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    
    );
  }
}

export default App;
