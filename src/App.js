import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component'
import SignInPage from './pages/sign-in-and-sign-up/SignInAndSignUp.component'
import Header from './components/header/Header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css'

class App extends React.Component {
  state = {
    currentUser: null  
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          this.setState({ currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          } })
        })

      } else {
        this.setState({ currentUser: userAuth })
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
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
 