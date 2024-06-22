describe('Performance Testing', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('should measure the page load time', () => {
      const startTime = new Date().getTime();
      cy.visit(baseUrl);
      cy.window().then(() => {
        const endTime = new Date().getTime();
        const loadTime = endTime - startTime;
        cy.log(`Page load time: ${loadTime} ms`);
        expect(loadTime).to.be.lessThan(2000); // Example threshold
      });
    });
  });