/// <reference types="cypress" />
import "../../support/cmd/saucedemo/login/login"
import "../../support/cmd/saucedemo/logout/logout"

context("Logout", () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })

    it("Deslogar com usuário standard", () => {
        var usr = Cypress.env('user_standard')
        cy.login_user(usr);
        cy.get('.product_label').contains("Products").should('be.visible')
        cy.logout()
    })

    //locked out user não faz login

    it("Deslogar com problem user", () => {
        var usr = Cypress.env('problem_user')
        cy.login_user(usr);
        cy.xpath('//*[@id="item_4_img_link"]/img') //download para cy.xpath https://www.npmjs.com/package/cypress-xpath
            .should('have.attr', 'src')
            .and('include', 'Garbage');
        cy.logout()
    })

    it("Deslogar com performance_glitch_user", () => {
        var usr = Cypress.env('performance_glitch_user')
        cy.login_user(usr);
        
        cy.get('body').contains("Products").should('be.visible');
        cy.logout()

    })
    
})