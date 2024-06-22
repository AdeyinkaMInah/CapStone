describe('Retrieve a Specific Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should retrieve a specific contact', () => {
      cy.request(`${baseUrl}/contacts/1`)
        .its('status')
        .should('eq', 200);
    });
  });