const { sum, sub, printBusinesses, printBusiness } = require('../print-businesses');
const colors = require('colors');

test('adds 1 + 2 to equal 3', () => {
    const rv = sum(1, 2);

    expect(rv).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
    const rv = sub(2, 1);

    expect(rv).toBe(1);
});

test('prints businesses', () => {
    const business1 = {
        name: 'business1',
        description: 'description1'
    };

    const consoleSpy = jest.spyOn(console, 'log');
    const colorBlueSpy = jest.spyOn(colors, 'blue');
    printBusiness(business1);

    expect(consoleSpy).toHaveBeenCalledWith('business1 : description1');
    expect(colorBlueSpy).toHaveBeenCalledWith('business1');

    //consoleSpy.mockRestore();
});