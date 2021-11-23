import Logo from "./Logo";

import { useMenuContext } from "../../contexts/MenuContext";
const NavBarFooter = () => {
	const { navBarClassActive } = useMenuContext();
	return (
		<footer>
			<div className="container">
				<div className="logoContainer">
					{navBarClassActive ? <Logo /> : null}
					<div className="contactContainer workshopCardLegend">
						<p className="contactText">3513403843</p>
						<p className="contactText">casacanto1070@gmail.com</p>
						<p className="contactText">
							Caseros 1070 - Alberdi - Córdoba Capital
						</p>
					</div>
				</div>
				<div className="socialContainer">
					<p className="socialTitle workshopCardLegend">Contactanos en:</p>
					<div className="iconsContainer">
						<a href="https://www.instagram.com/casa.canto/">
							<img src="/assets/icons/instagram.svg" alt="instagram" />
						</a>
						<a href="https://www.youtube.com/channel/UCofTWHiX5aIdin2AJ8UaO6w">
							<img src="/assets/icons/youtube.svg" alt="youtube" />
						</a>
						<a href="https://www.facebook.com/CasaCantoTalleresMusicales">
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
					height: 30vh;
					flex-direction: column;
					width: 100vw;
				}

				.container {
					display: flex;
					align-items: center;
					height: 7vh;
					width: 50%;
					height: 100%;
					flex-direction: column;
					justify-content: center;
					gap: 1vh;
				}

				.logoContainer {
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 4vw;
					flex-direction: column;
					text-align: center;
					height: 37%;
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
					align-items: center;
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
					height: 100%;
					object-fit: contain;
				}

				a {
					display: block;
					height: 100%;
					width: 5vh;
				}

				@media (min-width: 500px) {
					footer {
						display: none;
					}
				}
			`}</style>
		</footer>
	);
};

export default NavBarFooter;
