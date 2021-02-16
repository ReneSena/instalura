import styled from 'styled-components';
import { propToStyle } from '../../../../theme/propToStyle';

export const Box = styled.div`
	${propToStyle('flex')}
	${propToStyle('display')}
	${propToStyle('flexDirection')}
	${propToStyle('justifyContent')}
	${propToStyle('flex')}
	${propToStyle('flexWrap')}
	${propToStyle('backgroundImage')}
	${propToStyle('backgroundRepeat')}
	${propToStyle('backgroundPosition')}
`;
