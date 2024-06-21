describe('Delete a Non-existent Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should return 404 when deleting a non-existent contact', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/contacts/9999`,
        failOnStatusCode: false
      }).its('status').should('eq', 404);
    });
  });