/* eslint-disable react/destructuring-assignment */
import React from 'react';

import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
	PageComponent,
	{ pageWrapperProps } = { pageWrapperProps: {} }
) {
	return (props) => (
		<WebsiteGlobalProvider>
			<WebsitePageWrapper
				{...pageWrapperProps}
				// eslint-disable-next-line react/destructuring-assignment
				// eslint-disable-next-line react/prop-types
				{...props.pageWrapperProps}>
				<PageComponent {...props} />
			</WebsitePageWrapper>
		</WebsiteGlobalProvider>
	);
}
