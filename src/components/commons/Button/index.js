import styled, { css } from "styled-components";
import get from "lodash/get";

/*The variable theme and variant was extract of object props*/

const ButtonGhost = css`
	color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
	background: transparent;
`;

const ButtonDefault = css`
	color: white;
	background-color: ${({ theme, variant }) =>
		get(theme, `colors.${variant}.color`)};

	color: ${({ theme, variant }) =>
		get({ theme }, `colors.${variant}.contrastText`)};
`;

export const Button = styled.button`
	font-family: "Rudik", sans-serif;
	font-size: 16px;
	padding: 12px 26px;
	height: 44px;
	line-height: 20px;
	font-weight: bold;
	opacity: 1;
	border: 0;
	cursor: pointer;

	${(props) => (props.ghost ? ButtonGhost : ButtonDefault)}

	transition: opacity ${({ theme }) => theme.transition};
	border-radius: ${({ theme }) => theme.borderRadius};

	&:hover,
	&:focus {
		opacity: 0.5;
	}
`;
