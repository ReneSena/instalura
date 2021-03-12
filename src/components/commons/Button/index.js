import React from 'react';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/propToStyle';

/* The variable theme and variant was extract of object props */

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

const ButtonWrapper = styled.button`
	font-family: ${({ theme }) => theme.fontFamily};
	padding: 12px 26px;
	height: 44px;
	opacity: 1;
	border: 0;
	cursor: pointer;
	white-space: nowrap;

	${(props) => (props.ghost ? ButtonGhost : ButtonDefault)}

	transition: opacity ${({ theme }) => theme.transition};
	border-radius: ${({ theme }) => theme.borderRadius};

	&:hover,
	&:focus {
		opacity: 0.5;
	}

	${breakpointsMedia({
		xs: css`
			${TextStyleVariantsMap.smallestException}
		`,
		md: css`
			padding: 12px 43px;
			${TextStyleVariantsMap.paragraph1}
		`,
	})}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.2;
	}

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`};

	${propToStyle('margin')}
	${propToStyle('display')}
`;

export function Button({ href, children, ...props }) {
	const hasHref = Boolean(href);
	const tag = hasHref ? Link : 'button';

	return (
		<ButtonWrapper as={tag} href={href} {...props}>
			{children}
		</ButtonWrapper>
	);
}

Button.defaultProps = {
	href: '',
};

Button.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node.isRequired,
};
