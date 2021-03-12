import React from 'react';
import PropTypes from 'prop-types';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage({ faqCategories }) {
	return <FAQScreen faqCategories={faqCategories} />;
}

FAQPage.defaultProps = {
	faqCategories: [],
};

FAQPage.propTypes = {
	faqCategories: PropTypes.oneOfType([PropTypes.array]),
};

export async function getStaticProps() {
	const faqCategories = await fetch(
		'https://instalura-api.vercel.app/api/content/faq'
	)
		.then((responseServer) => responseServer.json())
		.then((responseConvert) => responseConvert.data);

	return {
		props: {
			faqCategories,
		},
	};
}
