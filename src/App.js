import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component'
import SignInPage from './pages/sign-in-and-sign-up/SignInAndSignUp.component'
import Header from './components/header/Header.component'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    ) 
  } 
}

export default App 
 