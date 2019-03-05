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