import React, { useState } from 'react'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SignIn.styles'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async event => {
    event.preventDefault()
    setEmail('')
    setPassword('')
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      let errorCode = error.code
      let errorMessage = error.message
    }
    auth.signInWithEmailAndPassword(email, password)
  }
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={this.handleChange}
          value={this.state.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={this.state.password}
          handleChange={this.handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
