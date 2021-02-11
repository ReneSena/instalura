import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../../theme/Logo";

export default function Menu() {
	const links = [
		{
			label: "Home",
			url: "/",
		},
		{
			label: "Perguntas frequentes",
			url: "/faq",
		},
		{
			label: "Sobre",
			url: "/sobre",
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
						<a href={link.url}>{link.label}</a>
					</li>
				))}
			</MenuWrapper.CentralSide>
			<MenuWrapper.RightSide>
				<button type="button">Entrar</button>
				<button type="button">Cadastrar</button>
			</MenuWrapper.RightSide>
		</MenuWrapper>
	);
}
