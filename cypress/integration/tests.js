describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays required componets', () => {
    cy.get('div#root');
    cy.get('.money.plus');
    cy.get('.money.minus');
    cy.get('ul.list');
    cy.get('form');
  });
  it('Add transactions', () => {
    cy.get('form input[type="text"]').type('transac01');
    cy.get('form input[type="number"]').type('{backspace}10');
    cy.get('form button').click();
    cy.get('form input[type="text"]').clear().type('transac02');
    cy.get('form input[type="number"]').clear().type('-1');
    cy.get('form button').click();
    cy.get('.money.plus').should('have.text', '$ 10.00');
    cy.get('.money.minus').should('have.text', '$ 1.00');
    cy.get('ul.list').children().should('have.length', 2);
  });
  it('Delete transactions', () => {
    cy.get('form input[type="text"]').type('transac01');
    cy.get('form input[type="number"]').type('{backspace}10');
    cy.get('form button').click();
    cy.get('.money.plus').should('have.text', '$ 10.00');
    cy.get('.money.minus').should('have.text', '$ 0.00');
    cy.get('ul.list').children().should('have.length', 1);
    cy.get('button.delete-btn').click();
    cy.get('.money.plus').should('have.text', '$ 0.00');
    cy.get('.money.minus').should('have.text', '$ 0.00');
    cy.get('ul.list').children().should('have.length', 0);
  });
});
