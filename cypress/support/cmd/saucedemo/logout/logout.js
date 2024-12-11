Cypress.Commands.add('logout', logout)

function logout(){
    cy.xpath('//*[@id="menu_button_container"]/div/div[3]/div/button') //download para cy.xpath https://www.npmjs.com/package/cypress-xpath
        .click()
    cy.get('#logout_sidebar_link').click()
    cy.get('[id="login-button"]').should('have.value', 'LOGIN')
}