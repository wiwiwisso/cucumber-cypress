/// <reference types="cypress" />

import {Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/LoginPage"







Then('une erreur s affiche', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.get(".oxd-alert-content--error").should("be.visible");
})

Then('j accede a mon espace admin', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.url().should("include", "/dashboard");
})

Given('je me rends sur le lien {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  cy.visit(s);
})

When('je saisis le nom d uilisateur {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  LoginPage.enterUserName(s);

})

When('je clique sur le bouton Login', () => {
  // Write code here that turns the phrase above into concrete actions
  LoginPage.clickToSubmitBtn();
})

When('je saisis le mot de passe {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  LoginPage.enterPassword(s);
})
