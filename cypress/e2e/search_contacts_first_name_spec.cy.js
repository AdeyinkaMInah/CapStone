describe('Search Contacts by First Name', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should search contacts by first name', () => {
      cy.request(`${baseUrl}/contacts?firstName=John`)
        .its('status')
        .should('eq', 200);
    });
  });