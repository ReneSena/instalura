import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { propToStyle } from '../../../theme/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const TextStyleVariantsMap = {
	paragraph1: css`
		font-size: ${({ theme }) =>
			theme.typographyVariants.paragraph1.fontSize};
		font-weight: ${({ theme }) =>
			theme.typographyVariants.paragraph1.fontWeight};
		line-height: ${({ theme }) =>
			theme.typographyVariants.paragraph1.lineHeight};
	`,

	paragraph2: css`
		font-size: ${({ theme }) =>
			theme.typographyVariants.paragraph2.fontSize};
		font-weight: ${({ theme }) =>
			theme.typographyVariants.paragraph2.fontWeight};
		line-height: ${({ theme }) =>
			theme.typographyVariants.paragraph2.lineHeight};
	`,

	smallestException: css`
		font-size: ${({ theme }) =>
			theme.typographyVariants.smallestException.fontSize};
		font-weight: ${({ theme }) =>
			theme.typographyVariants.smallestException.fontWeight};
		line-height: ${({ theme }) =>
			theme.typographyVariants.smallestException.lineHeight};
	`,
	title: css`
		${({ theme }) => css`
			font-size: ${theme.typographyVariants.titleXS.fontSize};
			font-weight: ${theme.typographyVariants.titleXS.fontWeight};
			line-height: ${theme.typographyVariants.titleXS.lineHeight};
		`}
		${breakpointsMedia({
			md: css`
				${({ theme }) => css`
					font-size: ${theme.typographyVariants.title.fontSize};
					font-weight: ${theme.typographyVariants.title.fontWeight};
					line-height: ${theme.typographyVariants.title.lineHeight};
				`}
			`,
		})}
	`,
};

const TextBase = styled.span`
	${({ variant }) => TextStyleVariantsMap[variant]}
	color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

	${propToStyle('textAlign')}
`;

function Text({ tag, variant, children, ...props }) {
	return (
		<TextBase variant={variant} as={tag} {...props}>
			{children}
		</TextBase>
	);
}

Text.defaultProps = {
	tag: 'span',
	variant: 'paragraph1',
	children: null,
};

Text.propTypes = {
	tag: PropTypes.string,
	variant: PropTypes.string,
	children: PropTypes.node,
};

export default Text;
