const ModalityCard = ({ mode, level, frecuency }) => {
	return (
		<div className="card">
			<div className="container">
				<h3 className="workshopCardTitle">{mode}</h3>
				<div>
					<h4 className="cardSubtitle workshopCardLegend">Niveles:</h4>
					<p className="text whiteBackgroundTextBody">{level}</p>
				</div>
				<div>
					<h4 className="cardSubtitle workshopCardLegend">Frecuencia:</h4>
					<p className="text whiteBackgroundTextBody">{frecuency}</p>
				</div>
				<div>
					<h4 className="cardSubtitle workshopCardLegend">
						Presencial/Virtual
					</h4>
				</div>
				<a>
					<button>Consultar</button>
				</a>
			</div>
			<style jsx>{`
				.card {
					position: relative;
					border-radius: 16px;
					background: black;
					width: 100%;
					color: white;
					min-height: 35vmax;
					padding: 0 3rem;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					gap: 0.5rem;
				}

				.cardSubtitle {
					color: var(--legend-text);
					color: white;
					font-size: 1.2rem;
				}

				.text {
					font-size: 1rem;
					line-height: 1.6em;
					color: var(--legend-text);
				}

				a {
					color: var(--legend-text);
					width: 100%;
					display: flex;
					justify-content: center;
				}

				a:visited {
					color: var(--legend-text);
				}

				a:link {
					color: var(--legend-text);
				}

				h3 {
					text-align: center;
					text-transform: uppercase;
					font-size: 1.6rem;
				}

				.container {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
					flex-grow: 1;
					justify-content: space-evenly;
				}

				button {
					width: 50%;
					font-size: 1rem;
				}
				@media (max-width: 700px) {
					.text {
						font-size: 1.2vh;
					}
					.cardSubtitle {
						font-size: 1.2vh;
					}
				}
			`}</style>
		</div>
	);
};

export default ModalityCard;
