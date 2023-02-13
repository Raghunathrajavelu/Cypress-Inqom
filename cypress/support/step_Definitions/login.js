import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const loginPage = require('../pageObjects/loginPage')

Given ('I go to the concerned URL', () => {

loginPage.visitPage()

})

When ('I fill the valid credentials as "Adresse email" and "Mot de passe"', () => {

loginPage.fillValidCredentials()

})

And ('I click on the "Se connecter" button', () => {

loginPage.loginToApplication()

})

Then ('I am successfully logged in to the application', () => {

loginPage.successLogin()

})