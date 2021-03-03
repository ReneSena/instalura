import React from 'react';
import { Feedback } from './Feedback';
import feedbackSuccessAnimation from './animations/success.json';
import feedbackErrorAnimation from './animations/error.json';
import LoadingAnimation from './animations/loading.json';

import { Button } from '../../commons/Button';
import TextField from '../../Forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
	DEFAULT: 'DEFAULT',
	LOADING: 'LOADING',
	DONE: 'DONE',
	ERROR: 'ERROR',
};

function FormContent() {
	const [isFormSubmited, setIsFormSubmited] = React.useState(false);
	const [submissionStatus, setSubmissionStatus] = React.useState(
		formStates.DEFAULT
	);

	const initialValues = {
		user: '',
		nome: '',
	};

	const [userInfo, setUserInfo] = React.useState(initialValues);

	function handleChange(event) {
		const fieldName = event.target.getAttribute('name');
		setUserInfo({
			...userInfo,
			[fieldName]: event.target.value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		setSubmissionStatus(formStates.LOADING);

		setIsFormSubmited(true);

		/* Data transfer Object */
		const userDTO = {
			username: userInfo.user,
			name: userInfo.nome,
		};

		fetch('https://instalura-api.vercel.app/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userDTO),
		})
			.then((responseServer) => {
				if (responseServer.ok) {
					return responseServer.json();
				}

				throw new Error('Não foi possível cadastrar o usuário. :(');
			})
			.then((responseData) =>
				setTimeout(() => {
					setSubmissionStatus(formStates.DONE);
					setUserInfo(initialValues);
				}, 5000)
			)
			.catch((error) => setSubmissionStatus(formStates.ERROR), 5000)
			.finally(() =>
				setTimeout(() => setSubmissionStatus(formStates.DEFAULT), 8000)
			);
	}

	const isFormInvalid =
		userInfo.user.length === 0 || userInfo.nome.length === 0;

	return (
		<form onSubmit={handleSubmit}>
			<Text variant="title" tag="h1" color="tertiary.main">
				Pronto para saber da vida dos outros?
			</Text>
			<Text
				variant="paragraph1"
				tag="p"
				color="tertiary.light"
				marginBottom="32px">
				Você está a um passo de saber tudoo que está rolando no bairro,
				complete seu cadastro agora!
			</Text>

			<div>
				<TextField
					placeholder="Nome"
					name="nome"
					value={userInfo.nome}
					onChange={handleChange}
				/>
			</div>
			<div>
				<TextField
					placeholder="Usuário"
					name="user"
					value={userInfo.user}
					onChange={handleChange}
				/>
			</div>

			<Button
				type="submit"
				variant="primary.main"
				fullWidth
				disabled={isFormInvalid}>
				Cadastrar
			</Button>

			{isFormSubmited && submissionStatus === formStates.LOADING && (
				<Feedback
					message="Enviando, aguarde..."
					nameAnimation={LoadingAnimation}
					loopAnimation
				/>
			)}

			{isFormSubmited && submissionStatus === formStates.DONE && (
				<Feedback
					message="Cadastro realizado com sucesso!"
					nameAnimation={feedbackSuccessAnimation}
				/>
			)}

			{isFormSubmited && submissionStatus === formStates.ERROR && (
				<Feedback
					message="Não foi possível realizar o cadastro, verifique se os
				dados estão corretos. E tente novamente."
					nameAnimation={feedbackErrorAnimation}
				/>
			)}
		</form>
	);
}

export default function FormCadastro({ propsModal }) {
	return (
		<Grid.Row
			marginLeft={0}
			marginRight={0}
			flex={1}
			justifyContent="flex-end">
			<Grid.Col
				display="flex"
				paddingRight={{ md: '0' }}
				flex={1}
				value={{ xs: 12, md: 5, lg: 4 }}>
				<Box
					boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					flex={1}
					padding={{
						xs: '16px',
						md: '85px',
					}}
					backgroundColor="white"
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...propsModal}>
					<FormContent />
				</Box>
			</Grid.Col>
		</Grid.Row>
	);
}
