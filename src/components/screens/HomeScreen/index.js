import React from 'react';
import { Button } from '../../commons/Button';
import Text from '../../foundation/Text';
import { Grid } from '../../foundation/layout/Grid';
import { WebsitePageContext } from '../../wrappers/WebsitePage';
import { Box } from '../../foundation/layout/Box';

// SOLID [S] = Single Responsability (Um componente deve ter apenas uma responsabilidade)
// SOLID [O] = Open Closed (Nunca modificar o que já tem, e sim adicionar, isso é pra prever futuros bugs)
// SOLID [L] = Liskov Substitution
// SOLID [I] = Interface Segregation
// SOLID [D] = Dependency Inversion

export default function HomeScreen() {
	const websitePageContext = React.useContext(WebsitePageContext);

	return (
		<Box flex="1" display="flex" flexDirection="column">
			<Grid.Container
				marginTop={{
					xs: '32px',
					md: '75px',
				}}>
				<Grid.Row>
					<Grid.Col
						value={{ xs: 12, md: 5 }}
						offset={{ xs: 0, md: 1 }}
						display="flex"
						alignItems="flex-start"
						justifyContent="center"
						flexDirection="column">
						<Text
							variant="title"
							tag="h1"
							color="tertiary.main"
							textAlign={{
								xs: 'center',
								md: 'left',
							}}>
							Compartilhe momentos e conecte-se com amigos
						</Text>

						<Text
							variant="paragraph1"
							tag="p"
							color="tertiary.light"
							textAlign={{
								xs: 'center',
								md: 'left',
							}}>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industrys standard dummy text ever since the 1500s.
						</Text>

						<Button
							variant="primary.main"
							margin={{
								xs: 'auto',
								md: 'initial',
							}}
							display="block"
							onClick={() =>
								websitePageContext.toggleModalCadastro()
							}>
							Cadastrar
						</Button>
					</Grid.Col>
					<Grid.Col
						value={{
							xs: 12,
							md: 6,
						}}>
						<img
							alt="Imagem de celular com páginas internas do projeto com o perfil do Nicolas Cage"
							style={{ display: 'block', margin: 'auto' }}
							src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
						/>
					</Grid.Col>
				</Grid.Row>
			</Grid.Container>
		</Box>
	);
}
