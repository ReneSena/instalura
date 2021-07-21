import { GraphQLClient, gql } from 'graphql-request';
import AboutScreen from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
	const TOKEN = process.env.DATA_CMS_TOKEN;
	const DatoCMSURL = 'https://graphql.datocms.com/';

	const client = new GraphQLClient(DatoCMSURL, {
		headers: {
			Authorization: `Bearer ${TOKEN}`,
		},
	});

	const query = gql`
		query {
			pageabout {
				pageTitle
				pageDescription
			}
		}
	`;

	const messages = await client.request(query);

	return {
		props: {
			messages,
		},
	};
}

export default websitePageHOC(AboutScreen);
