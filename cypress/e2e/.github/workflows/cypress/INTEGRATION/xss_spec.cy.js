// cypress/integration/xss_spec.cy.js
describe('XSS Vulnerability Test', () => {
    it('should prevent XSS attacks', () => {
      cy.visit('https://contact-list-app.com')
      cy.get('input[name="search"]').type('<script>alert("XSS")</script>')
      cy.get('button[type="submit"]').click()
      cy.on('window:alert', (str) => {
        expect(str).to.equal('XSS')
      })
    })
  })
  