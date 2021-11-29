import Link from "next/link";

const WorkshopCard = ({ title, level, image, slug }) => {
	return (
		<div className="card">
			<Link href={`/talleres/${slug}`}>
				<a>
					<figure>
						<img src={image} alt={title} />
					</figure>
					<div className="textContainer">
						<h3 className="subtitle">{title}</h3>
						<p className="whiteBackgroundTextBody">{`Niveles: ${level}`}</p>
					</div>
				</a>
			</Link>
			<style jsx>{`
				.card {
					width: 100%;
					height: 100%;
					background: white;
					border-radius: 0 0 16px 16px;
				}

				a {
					display: block;
					width: 100%;
					height: 100%;
					border-radius: 0 0 16px 16px;
				}

				figure {
					width: 100%;
				}

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}

				.textContainer {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: 2rem;
					gap: 2rem;
				}

				h3 {
					font-size: 1.2rem;
				}

				a:hover {
					color: white;
					background: var(--grey-background);
				}

				p {
					font-size: 0.9rem;
				}
			`}</style>
		</div>
	);
};

export default WorkshopCard;
