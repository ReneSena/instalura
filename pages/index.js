import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import HomeScreen from '../src/components/screens/HomeScreen';

export default websitePageHOC(HomeScreen, {
	pageWrapperProps: {
		seoProps: {
			headTitle: 'Home',
		},
		pageBoxProps: {
			backgroundImage: 'url(/images/bubbles.svg)',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'bottom right',
		},
	},
});
