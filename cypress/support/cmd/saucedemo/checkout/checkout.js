Cypress.Commands.add('checkout_completo', checkout_completo)
Cypress.Commands.add('removeItemCarrinho', removeItemCarrinho)

function checkout_completo(){
    cy.get("[class='btn_primary btn_inventory']").eq(0).click()
    cy.get("[class='btn_primary btn_inventory']").eq(1).click() //*[@id="shopping_cart_container"]/a/svg/path
    cy.get("[data-icon='shopping-cart']").click({force:true})
    cy.get('.subheader').contains("Your Cart").should('be.visible')
    cy.get('.btn_action').click() 
    cy.get('.subheader').contains("Checkout: Your Information").should('be.visible')
    cy.get('[data-test="firstName"]').type("Teste")
    cy.get('[data-test="lastName"]').type("Teste")
    cy.get('[data-test="postalCode"]').type("12345")
    cy.get('.btn_primary').click() 
    cy.get('.subheader').contains("Checkout: Overview").should('be.visible')
    cy.get('.summary_total_label').contains("$49.66").should('be.visible')
    cy.get('.btn_action').click()
    cy.get('.subheader').contains("Finish").should('be.visible')
    cy.get('.complete-header').contains("THANK YOU FOR YOUR ORDER").should('be.visible')
}

function removeItemCarrinho(){
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get("[class='btn_secondary btn_inventory']").contains("REMOVE").should('be.visible')
    cy.get("[data-icon='shopping-cart']").click({force:true})
    cy.get('.subheader').contains("Your Cart").should('be.visible')
    cy.get('.inventory_item_name').contains("Sauce Labs Backpack").should('be.visible')
    cy.get('.item_pricebar > .btn_secondary').click()
    cy.get('body').should('not.contain', 'Sauce Labs Backpack');
}