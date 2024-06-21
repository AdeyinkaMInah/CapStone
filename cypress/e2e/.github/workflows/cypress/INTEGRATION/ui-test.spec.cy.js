describe('UI Testing', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('should display the contact list page', () => {
      cy.contains('Contact List').should('be.visible');
    });
  
    it('should add a new contact via the UI', () => {
      cy.get('#add-contact').click();
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('button[type="submit"]').click();
      cy.contains('John Doe').should('be.visible');
    });
  
    it('should delete a contact via the UI', () => {
      cy.contains('John Doe').parent().find('.delete').click();
      cy.contains('John Doe').should('not.exist');
    });
  });