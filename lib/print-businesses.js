const colors = require('colors');


function printBusiness(business) {
    return console.log(`${colors.blue(business.name)} : ${colors.bgRed.white(business.description)}`);
}

function printBusinesses(businesses) {
    return printBusiness(businesses);
}

module.exports = {
    printBusinesses,
    printBusiness
}
