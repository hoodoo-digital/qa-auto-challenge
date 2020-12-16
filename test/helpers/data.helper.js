const { getRandomEmail } = require('./common.helper');

function defaultDataRegister() {
    return {
        firstName: 'Lucia',
        lastName: 'Calavera',
        email: getRandomEmail(),
        telephone: '11231',
        password: 'password',
        confirmPassword: 'password',
        agree: true
    }
};

function defaultUser() {
    return {
        email: 'pablo@test.com',
        password: 'test',
    }
};

let TestData = function() {
    this.firstName = defaultDataRegister.firstName;
    this.lastName = defaultDataRegister.lastName;
    this.email = defaultDataRegister.email;
    this.telephone = defaultDataRegister.telephone;
    this.password = defaultDataRegister.password;
    this.confirmPassword = defaultDataRegister.confirmPassword;
    this.agree = defaultDataRegister.agree;
}

module.exports = { 
    defaultDataRegister, 
    defaultUser,
    TestData
}