const pathModule = require('path');


const buildPath = (fragment) => {
    let rootDirectory = pathModule.resolve('./');
    return rootDirectory;
}

module.exports = {
    buildPath
}