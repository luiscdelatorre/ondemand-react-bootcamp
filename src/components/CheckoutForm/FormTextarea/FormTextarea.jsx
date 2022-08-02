import { useState } from 'react'
import { TextareaContainer, InputLabel } from './FormTextarea.styles'

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

export default FormTextarea
