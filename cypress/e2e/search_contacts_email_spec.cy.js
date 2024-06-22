describe('Search Contacts by Email', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should search contacts by email', () => {
      cy.request(`${baseUrl}/contacts?email=john.doe@example.com`)
        .its('status')
        .should('eq', 200);
    });
  });