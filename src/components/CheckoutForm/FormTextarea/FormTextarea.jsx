import { useState } from 'react'
import { TextareaContainer, InputLabel } from './FormTextarea.styles'
import PropTypes from 'prop-types'

const FormTextarea = ({ label, id }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
      <TextareaContainer>
        <InputLabel htmlFor={id}>{ label }</InputLabel>
        <textarea
          rows={8}
          name={id}
          onChange={handleChange}
          value={value}
        />
      </TextareaContainer>
  )
}

FormTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
} 

export default FormTextarea
