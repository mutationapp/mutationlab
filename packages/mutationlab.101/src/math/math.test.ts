import { add, subtract, multiply, divide } from './math'

describe(`
  This will have 100% code coverage but mutation covarage is 0%,
  just because this tests doesnt provide correct samples,
  they are but not good enough to prove the funtionality
`, () => {
  test('add', () => {
    expect(add(0, 0)).toBe(0)
  })

  test('subtract', () => {
    expect(subtract(0, 0)).toBe(0)
  })

  test('multiply', () => {
    expect(multiply(1, 1)).toBe(1)
  })

  test('divide', () => {
    expect(divide(1, 1)).toBe(1)
  })
})

describe.skip(`
  100% for both, 
  this shows the importance of your 
  testing with context
`, () => {
  test('add', () => {
    expect(add(2, 1)).toBe(3)
  })

  test('subtract', () => {
    expect(subtract(2, 1)).toBe(1)
  })

  test('multiply', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  test('divide', () => {
    expect(divide(4, 2)).toBe(2)
  })
})
