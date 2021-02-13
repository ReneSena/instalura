import React from "react";
import styled from "styled-components";
import Menu from "../src/components/commons/Menu";
import Footer from "../src/components/commons/Footer";
import Text from "../src/components/foundation/Text";
import { Button } from "../src/components/commons/Button";
import { Grid } from "../src/components/foundation/layout/Grid";

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
`;

export default function Home() {
	return (
		<Container>
			<Menu />

			<Grid.Container>
				<Grid.Row>
					<Grid.Col value={{ xs: 12, md: 5 }} offset={1}>
						<Text
							variant="title"
							tag="h1"
							color="tertiary.main"
							textAlign={{
								xs: "center",
								md: "left",
							}}
						>
							Compartilhe momentos e conecte-se com amigos
						</Text>

						<Text
							variant="paragraph1"
							tag="p"
							color="tertiary.light"
							textAlign={{
								xs: "center",
								md: "left",
							}}
						>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industrys standard dummy text ever since the 1500s.
						</Text>

						<Button
							variant="primary.main"
							margin={{
								xs: "auto",
								md: "initial",
							}}
							display="block"
						>
							Cadastrar
						</Button>
					</Grid.Col>
					<Grid.Col
						value={{
							xs: 12,
							md: 6,
						}}
					>
						<img
							style={{ display: "block", margin: "auto" }}
							src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
						/>
					</Grid.Col>
				</Grid.Row>
			</Grid.Container>
			<Footer />
		</Container>
	);
}
