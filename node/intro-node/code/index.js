const name = () => {
    console.log('Alex')
}

module.exports = name;


const nameFun = require('./index');

nameFun();