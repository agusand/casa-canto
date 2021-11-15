import WorkshopCard from "./WorkshopCard";

import workshops from "../../public/assets/data/workshopsCards";

const Workshops = () => {
	return (
		<section id="talleres">
			<article>
				<h2 className="whiteBackgroundTitle">
					Nuestros <span>talleres</span>
				</h2>
				<div>
					{workshops.map((workshop) => (
						<WorkshopCard key={workshop.slug} {...workshop} />
					))}
				</div>
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
					padding: 12vh 0;
				}

				h2 {
					width: 100%;
					text-align: center;
					text-transform: uppercase;
				}

				span {
					color: var(--hover-button-red);
				}

				div {
					display: grid;
					grid-template-columns: repeat(
						auto-fill,
						minmax(min(20rem, 90vw), 1fr)
					);
					grid-template-rows: auto;
					gap: 2rem;
					width: 100%;
				}

				@media (max-width: 700px) {
					h2 {
						font-size: 2.5rem;
					}
				}
			`}</style>
		</section>
	);
};

export default Workshops;
