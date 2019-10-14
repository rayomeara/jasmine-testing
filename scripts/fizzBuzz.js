function fizzBuzz(number) {
    if (number%3 === 0) {
        if (number%5 === 0) {
            return "FizzBuzz";
        }
        return "Fizz";
    } else if (number%5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}