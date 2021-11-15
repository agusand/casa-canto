import AppLayout from "../components/general/AppLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	);
}

export default MyApp;
