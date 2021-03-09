import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import Text from '../../foundation/Text';

export default function Menu({ onCadastrarClick }) {
	const links = [
		{
			label: 'Home',
			url: '/',
		},
		{
			label: 'Perguntas frequentes',
			url: '/faq',
		},
		{
			label: 'Sobre',
			url: '/about',
		},
		{
			label: 'Faq',
			url: '/faq',
		},
	];

	return (
		<MenuWrapper>
			<MenuWrapper.LeftSide>
				<Logo />
			</MenuWrapper.LeftSide>
			<MenuWrapper.CentralSide as="ul">
				{links.map((link) => (
					<li key={link.url}>
						<NextLink href={link.url}>
							<Text variant="paragraph1" tag="a" href={link.url}>
								{link.label}
							</Text>
						</NextLink>
					</li>
				))}
			</MenuWrapper.CentralSide>
			<MenuWrapper.RightSide>
				<Button ghost variant="secondary.main" href="/app/login">
					Entrar
				</Button>
				<Button variant="primary.main" onClick={onCadastrarClick}>
					Cadastrar
				</Button>
			</MenuWrapper.RightSide>
		</MenuWrapper>
	);
}

Menu.propTypes = {
	onCadastrarClick: PropTypes.func.isRequired,
};
