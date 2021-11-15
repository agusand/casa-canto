import Logo from "./Logo";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="logoContainer">
					<Logo />
					<div className="contactContainer workshopCardLegend">
						<p className="contactText">999999999999999</p>
						<p className="contactText">correo@gmail.com</p>
						<p className="contactText">Dirección</p>
					</div>
				</div>
				<div className="socialContainer">
					<p className="socialTitle workshopCardLegend">Contactanos en:</p>
					<div className="iconsContainer">
						<a href="">
							<img src="/assets/icons/instagram.svg" alt="instagram" />
						</a>
						<a href="">
							<img src="/assets/icons/youtube.svg" alt="youtube" />
						</a>
						<a href="">
							<img src="/assets/icons/facebook.svg" alt="facebook" />
						</a>
					</div>
				</div>
			</div>
			<style jsx>{`
				footer {
					position: relative;
					background: black;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 17vh;
				}

				.container {
					width: 80%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 7vh;
				}

				.logoContainer {
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 4vw;
					height: 70%;
				}

				.containerContainer {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
				}

				.contactText {
					font-weight: 300;
					color: var(--white-background-text-body);
				}

				.socialContainer {
					display: flex;
					flex-direction: column;
					gap: 1vh;
				}

				.socialTitle {
					display: flex;
					color: var(--black-background-text-body);
				}

				.iconsContainer {
					display: flex;
					gap: 1vh;
					height: 5vh;
					width: 17vh;
				}

				img {
					width: 100%;
					hieght: 100%;
					object-fit: container;
				}

				a {
					display: block;
					height: 100%;
					width: 5vh;
				}

				@media (max-width: 500px) {
					footer {
						height: 30vh;
						flex-direction: column;
					}

					.container {
						width: 50%;
						height: 100%;
						flex-direction: column;
						justify-content: center;
						gap: 1vh;
					}

					.logoContainer {
						flex-direction: column;
						text-align: center;
						height: 37%;
					}

					.socialContainer {
						align-items: center;
					}
				}
			`}</style>
		</footer>
	);
};

export default Footer;
