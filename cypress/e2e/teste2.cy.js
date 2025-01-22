describe('visitar página principal e clicar no botão "Ver..."', () => {
    it('passes', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('a', 'Ver pets disponíveis para adoção').click(); 
    })
  })