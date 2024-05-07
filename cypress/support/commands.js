
Cypress.Commands.add('createUser', (user) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/users`,
      body: user
    }).then((response) => {
      expect(response).to.have.property('status', 201);
    });
  });
  