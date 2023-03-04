const colors = jest.genMockFromModule('colors');

//colors.blue = jest.fn((text) => text);

const unity = s => s;

colors.bgRed = {};
colors.blue = colors.bgRed.white = unity;


module.exports = colors;