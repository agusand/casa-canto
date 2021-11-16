import { useCarouselContext } from "../../contexts/CarouselContext";

const TeacherCard = ({ title, subtitle, text, image, instagram }) => {
	const { slides } = useCarouselContext();
	return (
		<div className="card">
			<figure>
				<img src={image} alt={title} />
			</figure>
			<div className="container">
				<div>
					<h3 className="workshopCardTitle">{title}</h3>
					<p className="cardSubtitle workshopCardLegend">{subtitle}</p>
				</div>
				<p className="text whiteBackgroundTextBody">{text}</p>
				<p className="text whiteBackgroundTextBody">
					<a href={`https://www.instagram.com/${instagram}/`}>@{instagram}</a>
				</p>
			</div>
			<style jsx>{`
				.card {
					position: relative;
					border-radius: 16px;
					width: calc(${100 / slides.length}% - 3rem);
					background: black;
					color: white;
					min-height: 85%;
					padding: 0 2.5rem;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					gap: 0.5rem;
					margin: 0 1.5rem;
				}

				figure {
					position: relative;
					top: -2rem;
				}

				.cardSubtitle {
					color: var(--legend-text);
				}

				.text {
					font-size: 0.75rem;
					line-height: 1.6em;
					color: var(--legend-text);
				}

				a {
					color: var(--legend-text);
				}

				a:visited {
					color: var(--legend-text);
				}

				a:link {
					color: var(--legend-text);
				}

				.container {
					position: relative;
					top: -2rem;
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
					flex-grow: 1;
					justify-content: space-around;
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

export default TeacherCard;
