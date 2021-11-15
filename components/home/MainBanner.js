import Link from "next/link";

const MainBanner = () => {
	return (
		<section>
			<article>
				<figure></figure>
				<div>
					<h1 className="title blackBackgroundTitle">
						Hacé música y sentite como en casa
					</h1>
					<Link href="/">
						<a>
							<button className="buttonFont">Promociones</button>
						</a>
					</Link>
				</div>
			</article>
			<style jsx>{`
				section {
					height: 70vh;
				}

				article {
					height: 100%;
				}

				figure {
					position: absolute;
					left: 0;
					top: 0;
					width: 100vw;
					height: 77vh;
					z-index: 1;
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					background-image: url(/assets/images/background/portada-banner.webp);
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
					color: white;
				}

				button {
					width: 40%;
				}
				@media (max-width: 600px) {
					section {
						height: 40vh;
					}
					figure {
						height: 47vh;
						background-position: right;
						width: 150vw;
						right: -50%;
						left: unset;
					}

					button {
						width: 100%;
					}

					.title {
						font-size: 2rem;
					}
				}
			`}</style>
		</section>
	);
};

export default MainBanner;
