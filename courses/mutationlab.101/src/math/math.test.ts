import { add, subtract, multiply, divide } from './math'

describe.skip(`
  c(▀̿Ĺ̯▀̿ ̿).
  This module has 100% code coverage but mutation coverage is 50%, 
  just because tests doesn't provide correct context, 
  and not good enough to prove the functionality,
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

describe(`
  100% for both, 
  this shows the importance of 
  testing with correct context
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
