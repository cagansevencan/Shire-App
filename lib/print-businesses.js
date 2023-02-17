const colors = require('colors');

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function printBusiness(business) {
    return console.log(`${colors.blue(business.name)} : ${colors.green(business.description)}`);
}

function printBusinesses(businesses) {
    return printBusiness(businesses);
}

module.exports = {
    sum,
    sub,
    printBusinesses,
    printBusiness
}

