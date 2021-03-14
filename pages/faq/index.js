import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQPage({ faqCategories }) {
	return <FAQScreen faqCategories={faqCategories} />;
}

export default websitePageHOC(FAQPage, {
	pageWrapperProps: {
		seoProps: {
			headTitle: 'Perguntas Frequentes',
		},
	},
});

FAQPage.propTypes = FAQScreen.propTypes;

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
