describe('Update a Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should update a contact', () => {
      cy.request('PUT', `${baseUrl}/contacts/1`, {
        firstName: 'Updated',
        lastName: 'Contact',
        email: 'updated.contact@example.com'
      }).its('status').should('eq', 200);
    });
  });