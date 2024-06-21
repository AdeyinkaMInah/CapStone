describe('API Testing', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should retrieve all contacts', () => {
      cy.request(`${baseUrl}/contacts`)
        .its('status')
        .should('eq', 200);
    });
  
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
  
    it('should delete a contact', () => {
      // First create a new contact
      cy.request('POST', `${baseUrl}/contacts`, {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com'
      }).then((response) => {
        const contactId = response.body.id;
        // Then delete the contact
        cy.request('DELETE', `${baseUrl}/contacts/${contactId}`)
          .its('status')
          .should('eq', 204);
      });
    });
  });