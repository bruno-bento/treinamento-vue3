import { validateEmptyAndEmail, validateEmptyAndLenght3 } from './validators'

describe('Validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLenght3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndLenght3('12')).toBe('*Este campo precisa de no mínimo 3 caractéres')
  })

  it('should return true when input pass a correct param', () => {
    expect(validateEmptyAndLenght3('1234')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with a invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*Este e-mail é inválido')
  })

  it('should returns true when pass a correct param', () => {
    expect(validateEmptyAndEmail('myemail@gmail.com')).toBe(true)
  })
})
