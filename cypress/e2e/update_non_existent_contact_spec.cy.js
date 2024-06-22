describe('Update a Non-existent Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should return 404 when updating a non-existent contact', () => {
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/contacts/9999`,
        failOnStatusCode: false,
        body: {
          firstName: 'NonExistent',
          lastName: 'Contact',
          email: 'nonexistent.contact@example.com'
        }
      }).its('status').should('eq', 404);
    });
  });