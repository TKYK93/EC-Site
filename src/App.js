import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import Favorite from './Favorite';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  process.env.REACT_APP_STRIPE_KEY);

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
  //  For the purpose of tracking user
  auth.onAuthStateChanged(authUser => {    
    if(authUser) {
       dispatch(
         {
           type: 'SET_USER',
           user: authUser,
         }
       );
    }else{
      dispatch(
        {
          type: 'SET_USER',
          user: null,
      });
    }
  }
  
  )},[]);
  
  return (

    <Router>
    <div className="App">
      <Switch>  
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
          <Route path="/confirmation">
          <Header />
          <h1>confirmation Page</h1>
        </Route>
        </Route>
        <Route path="/favorite">
          <Header />
          <Favorite />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>   
    </div>
    </Router>
  );
}

export default App;
