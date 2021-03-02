import React from 'react';
import styled from 'styled-components';

export const SVG = styled.svg`
	stroke: ${({ theme }) => theme.colors.tertiary.light.color};
`;

export function CloseButton() {
	return (
		<SVG
			role="button"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M18 6L6 18"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 6L18 18"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</SVG>
	);
}
