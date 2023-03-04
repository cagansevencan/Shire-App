const { printBusiness } = require('../print-businesses');
const colors = require('colors');

test('prints businesses', () => {
    const business1 = {
        name: 'business1',
        description: 'description1'
    };

    const consoleSpy = jest.spyOn(console, 'log');

    //test 
    printBusiness(business1);

    //assertions
    expect(consoleSpy).toHaveBeenCalledWith('business1 : description1');

    // teardown
    consoleSpy.mockRestore();
});