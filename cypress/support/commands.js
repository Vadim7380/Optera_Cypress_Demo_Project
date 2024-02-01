Cypress.Commands.add('login', (username, password) => {
    cy.get('#sign-in-email').type(username);
    cy.get('#sign-in-password').type(password);
    cy.get('.sign-in-submit > div').click();
  });