import {
 isRequired,
 isValidEmail,
 isValidZipCode
}
 from './validators'

describe('Validators', () => {

  it('isRequired :: Should not return errors with a value', () => {
    const value = 'Foo'
    const label = 'Bar'
    const error = isRequired(value, label)
    expect(error).toBeNull()
  })

  it('isRequired :: should return an error with empty value', () => {
    const value = ''
    const label = 'Bar'
    const error = isRequired(value, label)
    expect(error).toBe(`${label} can't be empty`)
  })
  
  it('isValidEmail :: Should not return errors with a valid email', () => {
    const value = 'foo@bar.baz'
    const label = 'Email'
    const error = isValidEmail(value, label)
    expect(error).toBeNull()
  })

  it('isValidEmail :: should return an error without a valid email', () => {
    const value = 'foo@bar'
    const label = 'Email'
    const error = isValidEmail(value, label)
    expect(error).toBe('Email is invalid')
  })  

  it('isValidZipCode :: Should not return errors with a valid email', () => {
    const value = '12345'
    const label = 'ZIP code'
    const error = isValidZipCode(value, label)
    expect(error).toBeNull()
  })

  it('isValidZipCode :: should return an error without a valid email', () => {
    const value = 'foo'
    const label = 'ZIP code'
    const error = isValidZipCode(value, label)
    expect(error).toBe('ZIP code is invalid')
  })
  
})
