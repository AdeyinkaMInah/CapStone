describe('Fail to Create a Contact with Missing Fields', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should fail to create a contact with missing fields', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/contacts`,
        failOnStatusCode: false,
        body: {
          firstName: 'John'
        }
      }).its('status').should('eq', 400);
    });
  });