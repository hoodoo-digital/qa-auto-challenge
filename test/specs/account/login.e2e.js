const { defaultUser, defaultDataRegister } = require('../../helpers/data.helper');

const RegisterPage = require('../../pageobjects/register.page');
const AccountPage = require('../../pageobjects/account.page');
const LoginPage = require('../../pageobjects/login.page');

describe('Login Feature', () => {

    beforeEach( () => {
        browser.reloadSession();
        LoginPage.open();
    })

    it('try to login with invalid credentials', () => {

        const errorMessage = 'Warning: No match for E-Mail Address and/or Password.'
        
        let testData = defaultUser();
        testData.email = 'incorrect@email.com';

        LoginPage.login(testData);      
        expect(LoginPage.alertError).toHaveText(errorMessage);
    });

    it('try to login with valid credentials', () => {

        let testData = defaultUser();

        LoginPage.login(testData);      
        expect(browser).toHaveUrlContaining(AccountPage.pageUrl);
    });

    it('try to login with valid credentials with a fresh account', () => {

        let registerData = defaultDataRegister()
        let loginData = {
            email: registerData.email,
            password: registerData.password
        }

        RegisterPage.open();
        RegisterPage.register(registerData);

        // desloguearme
        browser.reloadSession();

        LoginPage.open();
        LoginPage.login(loginData);      
        expect(browser).toHaveUrlContaining(AccountPage.pageUrl);
    });

});


