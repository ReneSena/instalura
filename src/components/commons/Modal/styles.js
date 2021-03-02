import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	background: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	overflow: scroll;
	overflow: hidden;
	transition: ${({ theme }) => theme.transition};
	z-index: 100;

	& svg {
		position: absolute;
		top: 24px;
		right: 24px;
		cursor: pointer;
		z-index: 100;
		transition: ${({ theme }) => theme.transition};

		&:hover {
			opacity: 0.8;
		}
	}

	${({ isOpen }) => {
		if (isOpen) {
			return css`
				opacity: 1;
				pointer-events: all;
			`;
		}

		return css`
			opacity: 0;
			pointer-events: none;
		`;
	}};
`;
