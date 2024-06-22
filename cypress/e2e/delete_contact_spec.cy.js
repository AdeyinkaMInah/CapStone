describe('Delete a Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should delete a contact', () => {
      cy.request('POST', `${baseUrl}/contacts`, {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com'
      }).then((response) => {
        const contactId = response.body.id;
        cy.request('DELETE', `${baseUrl}/contacts/${contactId}`)
          .its('status')
          .should('eq', 204);
      });
    });
  });