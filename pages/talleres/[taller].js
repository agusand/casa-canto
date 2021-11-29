import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";

import Banner from "../../components/general/Banner";
import Modality from "../../components/talleres/Modality";

import workshopsCards from "../../public/assets/data/workshopsCards";

const WorkshopPage = () => {
	const [currentWorkshop, setCurrentWorkshop] = useState({});

	const router = useRouter();
	const { taller } = router.query;

	useEffect(() => {
		const workshopGetted = workshopsCards.find(
			(workshop) => workshop.slug === taller
		);

		setCurrentWorkshop(workshopGetted);

		return () => {
			setCurrentWorkshop({});
		};
	}, [taller]);

	return (
		<div>
			<Head>
				<title>
					Casa Canto
					{currentWorkshop?.title ? ` - ${currentWorkshop?.title}` : ""}
				</title>
			</Head>
			<Banner
				title={
					currentWorkshop?.slug === "taller-niños"
						? "Taller de iniciación musical infantil"
						: currentWorkshop?.title
				}
				message={`Hola! Quisiera más información de ${currentWorkshop?.title}`}
				slug={currentWorkshop?.slug}
				page={true}
			/>
			<Modality
				taller={currentWorkshop?.title}
				level={currentWorkshop?.level}
			/>
			<style jsx>{`
				div {
					width: 100%;
				}
				html {
					scroll-behavior: unset;
				}
			`}</style>
		</div>
	);
};

export default WorkshopPage;
