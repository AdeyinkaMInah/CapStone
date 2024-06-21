describe('Invalid Search Parameters', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should return 400 for invalid search parameters', () => {
      cy.request({
        url: `${baseUrl}/contacts?invalidParam=value`,
        failOnStatusCode: false
      }).its('status').should('eq', 400);
    });
  });