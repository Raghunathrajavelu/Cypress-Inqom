import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


const loginPage = require('../pageObjects/loginPage')
const accountSettingsPage = require('../pageObjects/accountSettingsPage')

Given ('I am logged in to the application', () => {

loginPage.visitPage()
loginPage.fillValidCredentials()
loginPage.loginToApplication()
loginPage.successLogin()

})

When ('I upload a profile photo on the settings page of the account', () =>{

accountSettingsPage.uploadProfilePhoto()

})

Then ('The profile photo is successfully uploaded', () => {

accountSettingsPage.successfulUpload()

})