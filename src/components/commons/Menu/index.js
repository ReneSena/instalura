import React from 'react';
import { Button } from '../Button';
import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import Text from '../../foundation/Text';

export default function Menu() {
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
			url: '/sobre',
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
						<Text variant="paragraph1" tag="a" href={link.url}>
							{link.label}
						</Text>
					</li>
				))}
			</MenuWrapper.CentralSide>
			<MenuWrapper.RightSide>
				<Button ghost variant="secondary.main">
					Entrar
				</Button>
				<Button variant="primary.main">Cadastrar</Button>
			</MenuWrapper.RightSide>
		</MenuWrapper>
	);
}
