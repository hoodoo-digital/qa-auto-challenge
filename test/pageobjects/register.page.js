const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {   /**
     * define selectors using getter methods
     */
    get inputFirstName () { return $('#input-firstname') }
    get inputLastName () { return $('#input-lastname') }
    get inputEmail () { return $('#input-email') }
    get inputTelephone () { return $('#input-telephone') }
    get inputPassword () { return $('#input-password') }
    get inputConfirmPassword () { return $('#input-confirm') }

    get checkAgree () { return $('[name=agree]') }
    get btnSubmit () { return $('[value=Continue]') }
    
    get lblError () { return $('.text-danger') }
    get alertError () { return $('.alert-danger') }

    get titleSuccess () { return $('#content h1')}

    /**
     * a method to encapsulate automation code to interact with the page
     * e.g. to register
     */
    register (registerData) {
        this.inputFirstName.setValue(registerData.firstName);
        this.inputLastName.setValue(registerData.lastName);
        this.inputEmail.setValue(registerData.email);
        this.inputTelephone.setValue(registerData.telephone);
        this.inputPassword.setValue(registerData.password);
        this.inputConfirmPassword.setValue(registerData.confirmPassword);

        if (registerData.agree)
            this.checkAgree.click()

        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/index.php?route=account/register');
    }
}

module.exports = new RegisterPage();
