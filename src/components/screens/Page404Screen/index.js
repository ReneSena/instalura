import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import animationPage404 from './animations/animation-404.json';
import Link from '../../commons/Link';
import { Button } from '../../commons/Button';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.background.main.color};

	& a {
		position: relative;
		top: -80px;
	}
`;

export default function Page404Screen() {
	return (
		<Container>
			<Lottie
				config={{
					animationData: animationPage404,
					loop: true,
					autoplay: true,
				}}
			/>
			<Button as={Link} href="/" variant="primary.main">
				Voltar ao início
			</Button>
		</Container>
	);
}
