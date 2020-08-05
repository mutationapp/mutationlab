const add = (x: number, y: number) => x + y

const subtract = (x: number, y: number) => x - y

const divide = (x: number, y: number) => x / y

const multiply = (x: number, y: number) => x * y

/**
  This will have 100% code coverage but mutation covarage is 0%,
  just because tests doesnt provide correct samples,
  they are but not good enough to prove the funtionality,
  see the solution here https://github.com/mutationapp/mutationlab/blob/101/packages/mutationlab.101/src/math/math.test.ts
 */

export { add, subtract, divide, multiply }
