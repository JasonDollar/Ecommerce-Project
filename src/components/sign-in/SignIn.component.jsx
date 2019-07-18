import React, { useState } from 'react'

import { signInWithGoogle } from '../../firebase/firebase.utils'
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'
import './SignIn.styles.scss'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    setEmail('')
    setPassword('')
    
  }
  return (
    <div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={handleSubmit}>
      <FormInput
        name="email"
        type="email"
        handleChange={setEmail}
        value={email}
        label="email"
        required
      />
      <FormInput
        name="password"
        type="password"
        value={password}
        handleChange={setPassword}
        label="password"
        required
      />
      <CustomButton type="submit" onClick={signInWithGoogle}> Sign in with Google</CustomButton>
    </form>
    </div>
  )
}

export default SignIn
