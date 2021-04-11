export default class LoginScreenPageObject {
	constructor(cy) {
		this.cy = cy;

		this.cy.visit('/app/login');
	}

	fillTheFormsFields({ user, password }) {
		// preencher o input de usuario
		this.cy.get('#formCadastro input[name="usuario"]').type(user);

		// preencher o input de senha
		this.cy.get('#formCadastro input[name="senha"]').type(password);

		return this;
	}

	submitLoginForm() {
		// clicar no button de submit
		this.cy.get('#formCadastro button[type="submit"]').click();

		return this;
	}
}
