/// <refence types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login/', () => {
	describe('when fill and submit a form login request', () => {
		it('go to the profile page', () => {
			// Pré Teste
			cy.intercept('https://instalura-api-omariosouto.vercel.app').as(
				'userLogin'
			);

			// Cenário
			const loginScreen = new LoginScreenPageObject(cy);
			loginScreen
				.fillTheFormsFields({
					user: 'omariosouto',
					password: 'senhasegura',
				})
				.submitLoginForm();

			// Asserções
			cy.url().should('include', '/app/profile');
			cy.wait('@userLogin').then((intercept) => {
				//  token do servidor
				const { token } = intercept.response.body.data;
				//  token do cookie é igual ao do server?
				cy.getCookie('APP_TOKEN')
					.should('exist')
					.should('have.property', 'value', token);
			});
		});
	});
});
