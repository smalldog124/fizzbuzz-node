function FizzBuzz(number) {
    if (isFizzBuzz(number)) return "FizzBuzz"
    if (isFizz(number)) return "Fizz"
    if (isBuzz(number)) return "Buzz"
    return number
}
module.exports = FizzBuzz

const isFizzBuzz = (number) => isFizz(number) && isBuzz(number)
const isFizz = (number) => number % 3 == 0
const isBuzz = (number) => number % 5 == 0