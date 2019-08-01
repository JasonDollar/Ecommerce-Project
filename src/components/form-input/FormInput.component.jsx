import React from 'react'
import PropTypes from 'prop-types'

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInput.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
)

export default FormInput

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
}