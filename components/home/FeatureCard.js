const FeatureCard = ({
	title,
	text,
	reverse = false,
	image,
	height,
	about = false,
}) => {
	return (
		<div>
			<figure>
				<img src={image} alt={title} />
			</figure>
			<div className="text">
				{title ? <h3 className="subtitle">{title}</h3> : null}
				<p className="whiteBackgroundTextBody">{text}</p>
			</div>
			<style jsx>{`
				div {
					display: flex;
					width: max(40rem, 85%);
					min-height: ${height}vh;
					align-items: center;
					gap: 1rem;
					flex-direction: ${reverse ? "row-reverse" : "row"};
					${about && "justify-content: space-between;"}
				}

				h3 {
					${about &&
					"font-size: 3rem; width: 50%; line-height: 1.2em; margin-bottom: 1rem;"}
				}

				figure {
					height: 100%;
					width: 50%;
				}

				img {
					height: 100%;
					max-width: 100%;
					object-fit: cover;
				}

				.text {
					flex-direction: column;
					justify-content: space-between;
					width: 45%;
					height: 80%;
					align-items: flex-start;
				}

				p {
					font-size: 1.1rem;
				}

				@media (max-width: 600px) {
					div {
						flex-direction: column;
						height: unset;
						gap: 5vh;
					}
					figure {
						width: 80%;
						object-fit: contain;
					}

					.text {
						width: 80%;
					}
				}
			`}</style>
		</div>
	);
};

export default FeatureCard;
