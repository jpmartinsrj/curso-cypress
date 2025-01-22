describe('Cadastro de novo usuário', () => {
  it('Passos', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click(); //procurar o elemento "a" com o texto "cadastrar" e clicar.
    cy.get('input[name="nome"]').type('João Pedro'); //pegar o "input" com name "nome" e escrever "João Pedro".
    cy.get('input[name="email"]').type('teste@teste.com');
    cy.get('input[name="password"]').type('Comida@123');
    cy.get('input[name="confirm_password"]').type('Comida@123');
    cy.contains('button', 'Cadastrar').click();
  })
})