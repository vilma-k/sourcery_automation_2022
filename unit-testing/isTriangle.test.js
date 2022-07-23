const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
});

test('5, 5, 5 is triangle', () => {
    expect(isTriangle(5, 5, 5)).toBe(true);
});

test('-1, 5, 5 is not triangle', () => {
    expect(isTriangle(-1, 5, 5)).toBe(false);
});

test('1, 1, 100 is not triangle', () => {
    expect(isTriangle(1, 1, 100)).toBe(false);
});

test('A, 1, 100 is not triangle', () => {
    expect(isTriangle('A', 1, 100)).toBe(false);
});

test('5.1, 6, 7.658 is triangle', () => {
    expect(isTriangle(5.1, 6, 7.658)).toBe(true);
});