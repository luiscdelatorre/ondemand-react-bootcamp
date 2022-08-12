import { useState } from 'react'
import { InputContainer, InputError, InputLabel } from './FormInput.styles'
import PropTypes from 'prop-types'

const FormInput = ({ label, id, validator }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    const { value } = event.target
    setError(validator(value, label))
    setValue(value)
  }

  return (
      <InputContainer error={!!error}>
        <InputLabel htmlFor={id}>{ label }</InputLabel>
        <input
          type="text"
          name={id}
          onChange={handleChange}
          value={value}
        />
        <InputError>{error}</InputError>
      </InputContainer>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  validator: PropTypes.func.isRequired,
} 

export default FormInput
