import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import LoginScreen from '../../src/components/screens/LoginScreen';

export default websitePageHOC(LoginScreen, {
	pageWrapperProps: {
		seoProps: {
			headTitle: 'Login',
		},
		menuProps: {
			display: false,
		},
	},
});
