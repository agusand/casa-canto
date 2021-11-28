import Link from "next/link";

const Banner = ({ title, message, slug, page = false }) => {
	return (
		<section>
			<article>
				<figure></figure>
				<div>
					<h1 className="title blackBackgroundTitle">{title}</h1>
					<Link
						href={`https://api.whatsapp.com/send?text=${message}&phone=+5493513403843`}
					>
						<a target="_blank">
							<button className="buttonFont">Promociones</button>
						</a>
					</Link>
				</div>
			</article>
			<style jsx>{`
				section {
					height: 75vh;
				}

				h1 {
					${page && "text-transform: uppercase; width: 60%"}
				}

				article {
					height: 100%;
				}

				figure {
					position: absolute;
					left: 0;
					top: 0;
					width: 100vw;
					height: 82vh;
					z-index: 1;
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					background-image: url(/assets/images/banners/${slug}.webp);
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				div {
					position: relative;
					display: flex;
					flex-flow: column nowrap;
					height: 100%;
					width: 40%;
					justify-content: space-evenly;
					z-index: 2;
					margin-top: 7vh;
					color: white;
				}

				button {
					width: 40%;
				}
				@media (max-width: 600px) {
					section {
						margin-top: 7vh;
						height: 40vh;
					}
					figure {
						height: 41vh;
						top: 6vh;
						right: 0;
						left: unset;
						background-image: url(/assets/images/banners/${slug}-mobile.webp);
					}

					button {
						width: 100%;
					}

					div {
						margin-top: 0;
					}

					.title {
						font-size: 2rem;
					}

					h1 {
						${page && "width: 100%"}
					}
				}
			`}</style>
		</section>
	);
};

export default Banner;
