/// <reference types="cypress" />
import "../../support/cmd/saucedemo/login/login"

context("Login", () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })

    it("Logar com usuário standard", () => {
        var usr = Cypress.env('user_standard')
        cy.login_user(usr);
        cy.get('.product_label').contains("Products")
    })

    it("Logar com locked out user", () => {
        var usr = Cypress.env('user_locked')
        cy.login_user(usr);
        cy.get('body').contains("Epic sadface: Sorry, this user has been locked out.").should('be.visible');
    })

    it("Logar com problem user", () => {
        var usr = Cypress.env('problem_user')
        cy.login_user(usr);
        cy.xpath('//*[@id="item_4_img_link"]/img') //download para cy.xpath https://www.npmjs.com/package/cypress-xpath
            .should('have.attr', 'src')
            .and('include', 'Garbage');
    })
    
})