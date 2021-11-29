import ModalityCard from "./ModalityCard";

const Modality = ({ taller, level }) => {
	return (
		<section>
			<article>
				<h2 className="blackBackgroundTitle">Modalidad</h2>
				<div>
					<ModalityCard
						mode="Grupal"
						level={level}
						frecuency="1 vez por semana"
						message={`Hola! Quisiera más información de ${taller}, modalidad grupal.`}
					/>
					<ModalityCard
						mode="Individual"
						level={level}
						frecuency="1 vez por semana"
						message={`Hola! Quisiera más información de ${taller}, modalidad individual.`}
					/>
				</div>
			</article>
			<style jsx>{`
				section {
					background-image: url("/assets/images/background/nuestros-profesores.webp");
					background-size: cover;
				}

				div {
					display: flex;
					justify-content: space-between;
					height: 60%;
					width: 100%;
					gap: 3vh;
				}

				article {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: column;
					height: 100%;
					padding: calc(10vmin + 7vh) 3vh 10vmin;
				}

				h2 {
					text-transform: uppercase;
					color: white;
					width: 100%;
					margin-bottom: 10vmin;
				}

				@media (max-width: 850px) {
					h2 {
						font-size: 2.5rem;
					}

					div {
						flex-direction: column;
					}
				}
			`}</style>
		</section>
	);
};

export default Modality;
