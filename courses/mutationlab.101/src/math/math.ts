/**
  This file will have 100% code coverage but mutation coverage is 50%, 
  just because tests doesnt provide correct samples, 
  and not good enough to prove the functionality,
  see the solution here https://github.com/mutationapp/mutationlab/blob/101/courses/mutationlab.101/src/math/math.test.ts
 */

// const add = () => undefined

const add = (x: number, y: number) => x + y

const subtract = (x: number, y: number) => x - y

const divide = (x: number, y: number) => x / y

const multiply = (x: number, y: number) => x * y

export { add, subtract, divide, multiply }
