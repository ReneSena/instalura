import React from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import Text from '../../../foundation/Text';
import { Box } from '../../../foundation/layout/Box';

export function Feedback({ message, nameAnimation }) {
	return (
		<Box>
			<Text
				variant="paragraph1"
				tag="p"
				color="tertiary.light"
				textAlign="center">
				{message}
			</Text>
			<Lottie
				height="80px"
				style={{
					position: 'relative',
					transform: 'translate(30px, -30px)',
				}}
				config={{
					animationData: nameAnimation,
					loop: false,
					autoplay: true,
				}}
			/>
		</Box>
	);
}

Feedback.propTypes = {
	message: PropTypes.string.isRequired,
	nameAnimation: PropTypes.oneOfType([
		PropTypes.elementType,
		PropTypes.func,
		PropTypes.object,
	]).isRequired,
};
