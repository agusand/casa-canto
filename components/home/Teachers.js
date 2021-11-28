import Carousel from "./Carousel";

const Teachers = () => {
	return (
		<section>
			<article>
				<h2 className="blackBackgroundTitle">Conoce a nuestros profesores</h2>
				<Carousel />
			</article>
			<style jsx>{`
				section {
					background-image: url("/assets/images/background/nuestros-profesores.webp");
					background-size: cover;
					min-height: 90vh;
				}

				article {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: column;
					height: 100%;
					padding: 10vh 0;
					gap: 10vh;
				}

				h2 {
					text-transform: uppercase;
					color: white;
					width: 50%;
					text-align: center;
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

export default Teachers;
