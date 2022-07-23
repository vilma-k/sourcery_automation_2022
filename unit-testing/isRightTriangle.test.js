const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

test('5, 5, 5 is not triangle', () => {
    expect(isRightTriangle(5, 5, 5)).toBe(false);
});

test('-1, 5, 5 is not triangle', () => {
    expect(isRightTriangle(-1, 5, 5)).toBe(false);
});

test('1, 1, 100 is not triangle', () => {
    expect(isRightTriangle(1, 1, 100)).toBe(false);
});

test('A, 1, 100 is not triangle', () => {
    expect(isRightTriangle('A', 1, 100)).toBe(false);
});

test('5.1, 6, 7.658 is not triangle', () => {
    expect(isRightTriangle(5.1, 6, 7.658)).toBe(false);
});