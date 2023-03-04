const { printBusinesses, printBusiness } = require('../print-businesses');
const colors = require('colors');

test.skip('prints businesses', () => {
    const business1 = {
        name: 'business1',
        description: 'description1'
    };

    const consoleSpy = jest.spyOn(console, 'log');

    printBusiness(business1);

    expect(consoleSpy).toHaveBeenCalledWith('business1 : description1');

    consoleSpy.mockRestore();
});