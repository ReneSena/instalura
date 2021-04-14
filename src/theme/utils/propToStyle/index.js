import { breakpointsMedia } from '../breakpointsMedia';

export function propToStyle(propName) {
	return (props) => {
		// eslint-disable-next-line react/destructuring-assignment
		const propValue = props[propName];

		if (typeof propValue === 'string' || typeof propValue === 'number') {
			return {
				// textAlign: props.textAlign
				[propName]: propValue,
			};
		}

		if (typeof propValue === 'object') {
			const breakpoints = {};

			if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
			if (propValue.md) breakpoints.md = { [propName]: propValue.md };

			return breakpointsMedia(breakpoints);
		}

		return null;
	};
}
