describe('Non-existent Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should return 404 for a non-existent contact', () => {
      cy.request({
        url: `${baseUrl}/contacts/9999`,
        failOnStatusCode: false
      }).its('status').should('eq', 404);
    });
  });