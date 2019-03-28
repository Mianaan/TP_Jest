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

    test('SumPrime of x < 0 is throwing exception', () => {
        expect(() => { Util.sumPrime(-10) }).toThrow('Unable to compute SumPrime for x < 0');
    });

    test('SumPrime of x > 100 000 is throwing exception', () => {
        expect(() => { Util.sumPrime(500000) }).toThrow('Unable to compute SumPrime for x > 100 000');
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
        [2, 2],
        [5, "Buzz"],
        [8, 8],
        [6, "Fizz"],
        [30, "FizzBuzz"],
        [97, 97],
    ])(
        'FizzBuzz %i equals to %i',
        (n, expected) => {
            expect(Util.fizzBuzz(n)).toBe(expected);
        }
    );
});