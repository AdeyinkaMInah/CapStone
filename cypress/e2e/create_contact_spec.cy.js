describe('Create a New Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should create a new contact', () => {
      cy.request('POST', `${baseUrl}/contacts`, {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });
    });
  });