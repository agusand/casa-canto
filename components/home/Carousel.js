import { useState, useEffect } from "react";

import TeacherCard from "./TeacherCard";

import { useCarouselContext } from "../../contexts/CarouselContext";

import teachers from "../../data/teachersCards.js";

const Carousel = () => {
	const { position, setPosition, slides, setSlides } = useCarouselContext();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setSlides(teachers);
		setIsMobile(window.innerWidth < 600);
		window.addEventListener("resize", () => {
			setIsMobile(window.innerWidth < 600);
			setPosition(0);
		});
		return () => {
			setSlides([]);
			setIsMobile(false);
			window.removeEventListener("resize", () => {
				setIsMobile(window.innerWidth < 600);
				setPosition(0);
			});
		};
	}, [setPosition, setSlides]);

	return (
		<div className="carousel">
			<div className="cardsContainer">
				{slides.map((teacher) => (
					<TeacherCard key={teacher.title} {...teacher} />
				))}
			</div>
			<div className="buttonsContainer">
				<img
					src="/assets/icons/arrow-left.svg"
					alt="izquierda"
					onClick={() => position > 0 && setPosition(position - 1)}
					className={position === 0 && "inactiveArrow"}
				/>
				<div className="dotsContainer">
					{slides.map((data, index) =>
						isMobile ? (
							<button
								key={data.title}
								className={
									(isMobile ? index : index - 2) === position && "activeButton"
								}
								onClick={() => setPosition(isMobile ? index : index - 2)}
							></button>
						) : (
							index === 0 ||
							index === 1 || (
								<button
									key={data.title}
									className={
										(isMobile ? index - 1 : index - 2) === position &&
										"activeButton"
									}
									onClick={() => setPosition(isMobile ? index - 1 : index - 2)}
								></button>
							)
						)
					)}
				</div>
				<img
					src="/assets/icons/arrow-right.svg"
					alt="derecha"
					onClick={() =>
						position < (isMobile ? slides.length - 1 : slides.length - 3) &&
						setPosition(position + 1)
					}
					className={
						position === (isMobile ? slides.length - 1 : slides.length - 3) &&
						"inactiveArrow"
					}
				/>
			</div>
			<style jsx>{`
				.carousel {
					min-height: 65%;
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					overflow-x: hidden;
					width: 100%;
					gap: 2rem;
				}

				.cardsContainer {
					height: 90%;
					display: flex;
					justify-content: space-between;
					align-items: stretch;
					transform: translateX(
						${-((100 / slides.length) * (position - (slides.length - 3) / 2))}%
					);
					transition: transform 0.5s;
					width: ${(100 / 3) * slides.length}%;
				}

				.buttonsContainer {
					display: flex;
					justify-content: center;
					gap: 5vw;
					align-items: center;
					height: 3.5vh;
				}

				img {
					height: 100%;
					object-fit: contain;
					cursor: pointer;
				}

				.dotsContainer {
					display: flex;
					justify-content: center;
					gap: 0.6rem;
				}

				button {
					background: var(--black-background-title);
					width: 0.6rem;
					height: 0.6rem;
					opacity: 0.3;
					cursor: pointer;
				}

				.activeButton {
					opacity: 1;
				}

				.inactiveArrow {
					opacity: 0;
					cursor: unset;
				}

				@media (max-width: 700px) {
					.carousel {
						width: 85%;
					}
					.cardsContainer {
						width: ${100 * slides.length}%;
						transform: translateX(
							${-(
								(100 / slides.length) *
								(position - 1 - (slides.length - 3) / 2)
							)}%
						);
					}
				}

				@media (pointer: coarse) {
					button {
						width: 1rem;
						height: 1rem;
					}
				}
			`}</style>
		</div>
	);
};

export default Carousel;
