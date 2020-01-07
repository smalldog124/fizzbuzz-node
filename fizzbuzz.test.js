const FizzBuzz = require('./fizzbuzz')
describe('FizzBuzz',()=>{
    it('input 1 shold be 1', () => {
        const expected = 1

        const actual = FizzBuzz(1)

        expect(actual).toBe(expected)
    })
    it('input 2 shold be 2', () => {
        const expected = 2

        const actual = FizzBuzz(2)

        expect(actual).toBe(expected)
    })
    it('input 3 shold be Fizz', () => {
        const expected = "Fizz"

        const actual = FizzBuzz(3)

        expect(actual).toBe(expected)
    })
    it('input 5 shold be Buzz', () => {
        const expected = "Buzz"

        const actual = FizzBuzz(5)

        expect(actual).toBe(expected)
    })
    it('input 15 shold be FizzBuzz', () => {
        const expected = "FizzBuzz"

        const actual = FizzBuzz(15)

        expect(actual).toBe(expected)
    })
})