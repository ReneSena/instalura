/// <refence types="cypress" />

describe('/pages/app/login/', () => {
	it('Preencha os campos e vá para a página de perfil', () => {
		cy.visit('/app/login/');

		//preencher o input de usuario
		cy.get('#formCadastro input[name="usuario"]').type('ReneSena');

		//preencher o input de senha
		cy.get('#formCadastro input[name="senha"]').type('12345678');

		//clicar no button de submit
		cy.get('#formCadastro button[type="submit"]').click();

		//o que esperamos? Ir para pagina de 'profile
		cy.url().should('include', '/app/profile');
	});
});
