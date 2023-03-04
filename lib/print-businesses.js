const colors = require('colors');


function printBusiness(business) {
    return console.log(`${colors.blue(business.name)} : ${colors.bgRed.white(business.description)}`);
}


module.exports = {
    printBusiness
}
