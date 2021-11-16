import Link from "next/link";

const ExperienceVideo = ({ title, href, image }) => {
	return (
		<div>
			<Link href={href}>
				<a>
					<figure>
						<img className="thumbnail" src={image} alt={title} />
						<img
							className="playIcon"
							src="/assets/icons/video-play.svg"
							alt="play"
						/>
					</figure>
				</a>
			</Link>
			<style jsx>{`
				div {
					height: 100%;
					border: solid 2px white;
				}

				a {
					height: 100%;
					display: block;
				}

				figure {
					position: relative;
					height: 100%;
					overflow: hidden;
				}

				.thumbnail {
					height: 100%;
					width: 100%;
					object-fit: cover;
				}

				.playIcon {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					height: 30%;
				}
			`}</style>
		</div>
	);
};

export default ExperienceVideo;
