import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
		<section>
			<article>{currentWorkshop.title}</article>
		</section>
	);
};

export default WorkshopPage;
