/// <reference types="cypress" />

class LoginPage {
    elements = {
        userNameField: () => cy.get('[name=username]'),
        passwordField: () => cy.get('[name=password]'),
        submitBtn: () => cy.get('button'),
    }

    enterUserName(value) {
        this.elements.userNameField().clear().type(value)
    }
    enterPassword(value) {
        this.elements.passwordField().clear().type(value)
    }
    clickToSubmitBtn() {
        this.elements.submitBtn().click()
    }
}

module.exports = new LoginPage()