const FeatureCard = ({ title, text, reverse = false, image }) => {
	return (
		<div>
			<figure>
				<img src={image} alt={title} />
			</figure>
			<div className="text">
				<h3 className="subtitle">{title}</h3>
				<p className="whiteBackgroundTextBody">{text}</p>
			</div>
			<style jsx>{`
				div {
					display: flex;
					width: max(40rem, 85%);
					height: 30vh;
					align-items: center;
					flex-direction: ${reverse ? "row-reverse" : "row"};
				}

				figure {
					height: 100%;
					width: 50%;
				}

				img {
					height: 100%;
					max-width: 100%;
					object-fit: contain;
				}

				.text {
					flex-direction: column;
					justify-content: space-between;
					width: 45%;
					height: 80%;
					align-items: flex-start;
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
