Cypress.Commands.add('login_user', login_user)

function login_user(user){
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="username"]').should('have.value', user)
    cy.get('[data-test="password"]').type(Cypress.env('password'), {log:false})
    cy.get('[id="login-button"]').click()
}