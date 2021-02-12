import React from "react";
import styled from "styled-components";
import Menu from "../src/components/commons/Menu";
import Footer from "../src/components/commons/Footer";

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
			<Footer />
		</Container>
	);
}