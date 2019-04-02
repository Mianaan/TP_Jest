const Util = require('./math');

describe('Factorial', function () {

    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
    ])(
        'Factorial %i equals to %i',
        (n, expected) => {
            expect(Util.factorial(n)).toBe(expected);
        },
    );

    test('Factorial of negative integers throws exception', () => {
        expect(()=> {Util.factorial(-10)}).toThrow();
    });
});

describe('IsPrime', function () {

    test('IsPrime of 1 is false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });

    test('IsPrime of 0 is false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });

    test('IsPrime of x < 0 is throwing exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute IsPrime for n < 0');
    });

    test('IsPrime of x > 100 000 is throwing exception', () => {
        expect(() => { Util.isPrime(500000) }).toThrow('Unable to compute IsPrime for n > 100 000');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'IsPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

describe('SumPrime', function () {

    test('SumPrime of 1 is false', () => {
        expect(Util.sumPrime(1)).toBe(0)
    });

    test('SumPrime of n < 0 is throwing exception', () => {
        expect(() => { Util.sumPrime(-10) }).toThrow('Unable to compute SumPrime for n < 0');
    });

    test('SumPrime of n > 100 000 is throwing exception', () => {
        expect(() => { Util.sumPrime(500000) }).toThrow('Unable to compute SumPrime for n > 100 000');
    });

    test.each([
        [2, 2],
        [5, 10],
        [8, 17],
        [6, 10],
    ])(
        'SumPrime %i equals to %i',
        (n, expected) => {
            expect(Util.sumPrime(n)).toBe(expected);
        }
    );
});

describe('FizzBuzz', function () {

    test('FizzBuzz of 1 is [1]', () => {
        expect(Util.fizzBuzz(1)).toEqual([1]);
    });

    test('FizzBuzz on table of int from 1 to 15 is ', () => {
        expect(Util.fizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    });

    test('FizzBuzz on table of int from 1 to 3 is', () => {
        expect(Util.fizzBuzz(3)).toEqual([1, 2, "Fizz"]);
    });

    test.each([
        [2, [1, 2]],
        [5, [1, 2, "Fizz", 4, "Buzz"]],
        [8, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]],
        [6, [1, 2, "Fizz", 4, "Buzz", "Fizz"]],
        [30, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz"]],
        [97, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97]],
    ])(
        'FizzBuzz %i equals to %i',
        (n, expected) => {
            expect(Util.fizzBuzz(n)).toEqual(expected);
        }
    );
});