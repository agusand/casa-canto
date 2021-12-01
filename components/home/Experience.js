import ExperienceVideo from "./ExperienceVideo";

import videosCards from "../../data/videosCards";

const Experience = () => {
	return (
		<section>
			<article>
				<h2 className="blackBackgroundTitle">
					Experiencia <span>Casa canto</span>
				</h2>
				<div>
					{videosCards.map((video) => (
						<ExperienceVideo key={video.title} {...video} />
					))}
				</div>
			</article>
			<style jsx>{`
				section {
					background-image: url("/assets/images/background/nuestros-profesores.webp");
					background-size: cover;
				}

				article {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: column;
					height: 100%;
					gap: 10vh;
					padding: 12vh 0;
				}

				h2 {
					text-transform: uppercase;
					color: white;
					width: 50%;
					text-align: center;
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

				span {
					display: block;
				}

				@media (max-width: 500px) {
					h2 {
						width: 80%;
						font-size: 2.5rem;
					}
				}
			`}</style>
		</section>
	);
};

export default Experience;
