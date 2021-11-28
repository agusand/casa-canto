import FeatureCard from "./FeatureCard";

import features from "../../public/assets/data/featuresCards.js";

const Why = () => {
	return (
		<section>
			<article>
				<h2 className="whiteBackgroundTitle">
					<span>¿Por qué</span>
					<span className="darkRedText">Casa Canto?</span>
				</h2>
				{features.map((data) => (
					<FeatureCard key={data.title} {...data} />
				))}
			</article>
			<style jsx>{`
				section {
					background: var(--por-que-casa-canto-grey-background);
				}
				article {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					gap: 12vh;
					padding: 17vh 0 12vh;
				}

				h2 {
					width: 100%;
					text-align: center;
					text-transform: uppercase;
				}

				span {
					display: block;
				}

				.darkRedText {
					color: var(--hover-button-red);
				}

				@media (max-width: 600px) {
					article {
						padding: 8vh 0;
					}
					h2 {
						font-size: 2.5rem;
					}
				}
			`}</style>
		</section>
	);
};

export default Why;
