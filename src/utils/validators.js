const isRequired = (value, label, min = 1) => {
  const validator = value.trim().length >= min 
  const message = `${label} can't be empty`

  return validate(validator, message)
}

const isValidEmail = (value, label) => {
  const validator = /\S+@\S+\.\S+/.test(value)
  const message = `${label} is invalid`
  
  return validate(validator, message)
}

const isValidZipCode = (value, label) => {
  const validator = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)
  const message = `${label} is invalid`
  
  return validate(validator, message)
}

const validate = (isValid, message) => {
  if (!isValid) {
    return message
  }

  return null
}

export {
 isRequired,
 isValidEmail,
 isValidZipCode
}
