describe('Retrieve All Contacts', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should retrieve all contacts', () => {
      cy.request(`${baseUrl}/contacts`)
        .its('status')
        .should('eq', 200);
    });
  });