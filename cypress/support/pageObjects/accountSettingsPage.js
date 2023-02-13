const { expect } = require("chai")

class accountSettingsPage{

    constructor(){
        
        this.uploadFile = ('[data-testid="account-edit-field-avatar"]')
        this.saveBtn = ('[data-testid="account-edit-button-submit"]')
        this.uploadedFile = ('div[class="sc-gBInCZ eWBEqi"]')
       
    }

    uploadProfilePhoto(){

        
        cy.get(this.uploadFile).selectFile('cypress/fixtures/inqomimg.JPG', { action: "drag-drop"})
        cy.get(this.saveBtn).click()
    }

    successfulUpload(){

        cy.get(this.uploadedFile).find('svg[class="sc-iJbNxu dfkBRq  wui-icon"]').should('be.visible')
        
    }
}

module.exports = new accountSettingsPage()