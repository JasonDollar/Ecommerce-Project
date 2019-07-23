import React from 'react'
import {connect} from 'react-redux'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import HomePage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component'
import SignInPage from './pages/sign-in-and-sign-up/SignInAndSignUp.component'
import Checkout from './pages/checkout/Checkout.component'
import Header from './components/header/Header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

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
          const data = snapShot.data()
          this.props.setCurrentUser({
            id: snapShot.id,
            ...data
          })
        })

      } else {
        this.props.setCurrentUser(userAuth)
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signin" render={props => this.props.currentUser ? <Redirect to="/"/> : <SignInPage {...props}/>} />
        </Switch>
      </div>
    ) 
  } 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App) )
 