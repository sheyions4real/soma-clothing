import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import './pages/homepage/homepage.styles.scss';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';




//  const HatsPage =(props)=>{
//   console.log(props)
//    return(
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );
//  }


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  
  );
}

export default App;
