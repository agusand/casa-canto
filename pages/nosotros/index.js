import FeatureCard from "../../components/home/FeatureCard";

import aboutUs from "../../public/assets/data/aboutUs.js";

export default function AboutUs() {
	return (
		<div>
			<div className="headerBackground"></div>
			<section>
				<article>
					<h2 className="whiteBackgroundTitle">
						<span>Nuestra </span>
						<span className="darkRedText">Historia</span>
					</h2>
					{aboutUs.map((data) => (
						<FeatureCard key={data.key} {...data} />
					))}
				</article>
			</section>
			<style jsx>{`
				div {
					width: 100%;
				}

				section {
					background: var(--por-que-casa-canto-grey-background);
				}
				article {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					gap: 12vh;
					min-width: 80vw;
					padding: 12vh 0;
				}

				h2 {
					width: 100%;
					text-align: center;
					text-transform: uppercase;
				}

				.darkRedText {
					color: var(--hover-button-red);
				}

				.headerBackground {
					position: absolute;
					background: black;
					height: 7vh;
					top: 0;
				}

				@media (max-width: 600px) {
					article {
						padding: 16vh 0;
					}
					h2 {
						font-size: 2.5rem;
					}

					.headerBackground {
						position: fixed;
					}
				}
			`}</style>
		</div>
	);
}
