import Head from "next/head";
import { MenuContextProvider } from "../../contexts/MenuContext";

import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Casa Canto</title>
				<meta
					name="description"
					content="Casa Canto te propone una experiencia de aprendizaje al mismo tiempo que te permite pasar un buen momento, dejar de lado el estrés, despejar la mente y sentir la música. Las actividades grupales son una buena oportunidad para conocer gente nueva y relacionarse."
				/>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/assets/icons/favicon/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/assets/icons/favicon/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/assets/icons/favicon/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/assets/icons/favicon/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/assets/icons/favicon/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/assets/icons/favicon/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/assets/icons/favicon/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/assets/icons/favicon/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/icons/favicon/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/assets/icons/favicon/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/assets/icons/favicon/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/assets/icons/favicon/manifest.json" />
				<link
					rel="sitemap"
					type="application/xml"
					title="Sitemap"
					href="/sitemap.xml"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<MenuContextProvider>
				<Header />
				<main>{children}</main>
				<Footer />
			</MenuContextProvider>
		</>
	);
};

export default AppLayout;
