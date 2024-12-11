/// <reference types="cypress" />
import "../../support/cmd/saucedemo/login/login"
import "../../support/cmd/saucedemo/checkout/checkout"

describe("Checkout process", () => {
    context("Compra Completa", () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
            cy.visit('https://www.saucedemo.com/v1/index.html')
        })
    
        it("Compra completa com usuário standard", () => {
            var usr = Cypress.env('user_standard')
            cy.login_user(usr);
            cy.get('.product_label').contains("Products").should('be.visible')
    
            cy.checkout_completo();
        })
    
        //o teste vai falhar devido ao fato do usuário ter bugs:
        //1. na seleção dos produtos
        //2. os valores no checkout não correspondem a soma correta dos itens
        it.skip("Compra completa com problem user", () => {
            var usr = Cypress.env('problem_user')
            cy.login_user(usr);
            cy.xpath('//*[@id="item_4_img_link"]/img') //download para cy.xpath https://www.npmjs.com/package/cypress-xpath
                .should('have.attr', 'src')
                .and('include', 'Garbage');
            
            cy.checkout_completo();
        })
    
        it("Compra completa com performance_glitch_user", () => {
            var usr = Cypress.env('performance_glitch_user')
            cy.login_user(usr);
    
            cy.get('body').contains("Products").should('be.visible');
    
            cy.checkout_completo();
    
        })
        
    })
    
    context("Compra removida do carrinho",()=>{
        beforeEach(() => {
            cy.viewport(1920, 1080);
            cy.visit('https://www.saucedemo.com/v1/index.html')
        })
    
        it("Remoção de item do carrinho com usuário standard", () => {
            var usr = Cypress.env('user_standard')
            cy.login_user(usr);
            cy.get('.product_label').contains("Products").should('be.visible')
    
            cy.removeItemCarrinho()
        })
    })
})
