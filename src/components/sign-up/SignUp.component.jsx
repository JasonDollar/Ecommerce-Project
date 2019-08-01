import React, { useState } from 'react'
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { SignUpContainer, SignUpTitle } from './SignUp.styles'

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {
    displayName, email, password, confirmPassword, 
  } = credentials

  const handleChange = e => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )

      await createUserProfileDocument(user, { displayName })

      setCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={this.handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
