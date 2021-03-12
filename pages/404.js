import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import animationPage404 from '../src/theme/animations/animation-404.json';
import Link from '../src/components/commons/Link';
import { Button } from '../src/components/commons/Button';

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

function Page404() {
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

export default Page404;
