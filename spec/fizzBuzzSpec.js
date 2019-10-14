describe("FizzBuzz tests", function() {
    it("should return 'FizzBuzz' message", function() {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
        expect(fizzBuzz(45)).toBe("FizzBuzz");
        expect(fizzBuzz(105)).toBe("FizzBuzz");
    });
    it("should return 'Fizz' message", function() {
        expect(fizzBuzz(9)).toBe("Fizz");
        expect(fizzBuzz(12)).toBe("Fizz");
        expect(fizzBuzz(27)).toBe("Fizz");
    }); 
    it("should return 'Buzz' message", function() {
        expect(fizzBuzz(10)).toBe("Buzz");
        expect(fizzBuzz(20)).toBe("Buzz");
        expect(fizzBuzz(50)).toBe("Buzz");
    });
    it("should return number", function() {
        expect(fizzBuzz(7)).toBe(7);
        expect(fizzBuzz(13)).toBe(13);
        expect(fizzBuzz(16)).toBe(16);
    });
});