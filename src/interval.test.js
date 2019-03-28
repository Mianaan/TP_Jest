const Interval = require('./interval');

describe('Overlaps', function () {

    test('Interval 1 overlaps interval 2 is true', () => {
        let int1 = new Interval(5,10);
        let int2 = new Interval(4,9);
            expect(int1.overlaps(int2)).toBeTruthy();
        });

    test('Interval 1 overlaps interval 2 (is a dot) is true', () => {
        let int1 = new Interval(14,16);
        let int2 = new Interval(15,15);
        expect(int1.overlaps(int2)).toBeTruthy();
    });

    test('Interval 1 (is a dot) overlaps interval 2 (is a dot) is false', () => {
        let int1 = new Interval(15,15);
        let int2 = new Interval(15,15);
        expect(int1.overlaps(int2)).toBeFalsy();
    });

    test('Interval 1 (is a dot) overlaps interval 2 is false', () => {
        let int1 = new Interval(15,15);
        let int2 = new Interval(15,20);
        expect(int1.overlaps(int2)).toBeFalsy();
    });

    test('Interval 1 overlaps interval 2 is false', () => {
        let int1 = new Interval(3,30);
        let int2 = new Interval(30,35);
        expect(int1.overlaps(int2)).toBeFalsy();
    });
});

describe('Includes', function () {

    test('Interval 1 includes interval 2 is true', () => {
        let int1 = new Interval(5,10);
        let int2 = new Interval(6,9);
        expect(int1.includes(int2)).toBe(true);
    });

    test('Interval 2 includes interval 1 is false', () => {
        let int1 = new Interval(15,20);
        let int2 = new Interval(10,30);
        expect(int1.includes(int2)).toBe(false);
    });

    test('Interval 1 (is a dot) includes interval 2 (is a dot) is true', () => {
        let int1 = new Interval(15,15);
        let int2 = new Interval(15,15);
        expect(int1.includes(int2)).toBe(true);
    });

    test('Interval 1 (bis) includes interval 2 is false', () => {
        let int1 = new Interval(5,2);
        let int2 = new Interval(3,5);
        expect(int1.includes(int2)).toBe(false);
    });

    test('Interval 1 includes interval 2 is false', () => {
        let int1 = new Interval(4,8);
        let int2 = new Interval(10,16);
        expect(int1.includes(int2)).toBe(false);
    });
});