describe('UI Testing', () => {
  const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';

  beforeEach(() => {
    cy.visit(baseUrl);
    // Optionally, wait for an element to be visible before each test
    cy.contains('Contact List').should('be.visible');
  });

  it('should display the contact list page', () => {
    // Assert that the Contact List text is visible
    cy.contains('Contact List').should('be.visible');
  });

  it('should add a new contact via the UI', () => {
    cy.get('#add-contact').click();
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('button[type="submit"]').click();
    // Wait for the new contact to appear after submission
    cy.contains('John Doe').should('be.visible');
  });

  it('should delete a contact via the UI', () => {
    // Add a contact first (if needed)
    // cy.get('#add-contact').click();
    // cy.get('input[name="firstName"]').type('John');
    // cy.get('input[name="lastName"]').type('Doe');
    // cy.get('input[name="email"]').type('john.doe@example.com');
    // cy.get('button[type="submit"]').click();

    // Now delete the contact
    cy.contains('John Doe').parent().find('.delete').click();
    // Ensure the contact is removed from the UI
    cy.contains('John Doe').should('not.exist');
  });
});
