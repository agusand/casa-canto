import Link from "next/link";
import { useCallback } from "react";

import NavBarFooter from "./NavBarFooter";

import { useMenuContext } from "../../contexts/MenuContext";

const NavBar = () => {
	const { navBarClassActive, setNavBarClassActive, setOpen, open } =
		useMenuContext();

	const navBarClickHandler = useCallback(async () => {
		setNavBarClassActive(" navbar--closing");
		setTimeout(() => {
			setNavBarClassActive("");
		}, 300);
		setOpen(!open);
	}, [open, setNavBarClassActive, setOpen]);
	return (
		<nav onClick={navBarClickHandler} className={`${navBarClassActive}`}>
			<ul>
				<li>
					<Link href="/nosotros">
						<a className="buttonFont">Nosotros</a>
					</Link>
				</li>
				<li>
					<Link href="/#talleres">
						<a className="buttonFont">Talleres</a>
					</Link>
				</li>
				<li>
					<Link href="/#contacto">
						<a className="buttonFont">Contacto</a>
					</Link>
				</li>
			</ul>
			<NavBarFooter />
			<style jsx>
				{`
					nav {
						width: 40%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					ul {
						width: 100%;
						height: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					li {
						height: 100%;
						display: flex;
						align-items: center;
						cursor: pointer;
					}

					li:hover {
						background: linear-gradient(var(--button-red), var(--button-red));
						background-repeat: no-repeat;
						background-size: 90% 0.2rem;
						background-position: 50% 90%;
					}

					@media (max-width: 500px) {
						nav {
							display: none;
							background: black;
							position: fixed;
							top: 0;
							left: 0;
							width: 100%;
							min-width: 100%;
							height: 100vh;
							transition: opacity 0.3s;
							opacity: 0;
							z-index: 0;
							justify-content: flex-start;
							flex-direction: column;
							align-items: center;
						}

						.navbar--init {
							display: flex;
						}

						.navbar--open {
							display: flex;
							opacity: 1;
							z-index: 4;
						}

						.navbar--closing {
							display: flex;
							opacity: 0;
							z-index: 4;
						}

						ul {
							margin-top: 7vh;
							height: 63vh;
							position: relative;
							display: flex;
							flex-direction: column;
							text-align: left;
						}

						li {
							width: 70%;
						}

						a {
							font-size: 2rem;
						}
					}
				`}
			</style>
		</nav>
	);
};

export default NavBar;
