const { expect } = require("chai")

class loginPage{

    constructor(){

            this.url = 'www.welcometothejungle.com/fr/me/settings/account'
            this.email = ('[data-testid="login-field-email"]')
            this.pwd = ('[data-testid="login-field-password"]')
            this.seconnecter = ('[data-testid="login-button-submit"]')
   
    }
     
    visitPage(){

        cy.visit(this.url)
    }

    fillValidCredentials(){

        cy.get(this.email).type('inqom.qaautomationapplicant@gmail.com')
        cy.get(this.pwd).type('o5N,d5ZR@R7^')
    }
   
    loginToApplication(){


        cy.get(this.seconnecter).click()
    }

    successLogin(){

        cy.url().should('include', 'fr/me/settings/account')
    }
    

}

module.exports = new loginPage()