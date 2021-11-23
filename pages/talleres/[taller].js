import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
			<Banner
				title={currentWorkshop?.title}
				message={`Hola ${currentWorkshop?.title}`}
				slug={currentWorkshop?.slug}
				page={true}
			/>
			<Modality />
			<style jsx>{`
				div {
					width: 100%;
				}
			`}</style>
		</div>
	);
};

export default WorkshopPage;
