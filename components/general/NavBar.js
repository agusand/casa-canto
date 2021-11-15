import Link from "next/link";
import { useCallback } from "react";

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
		<nav className={`${navBarClassActive}`}>
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

					@media (max-width: 700px) {
						nav {
							display: none;
							background: $background;
							position: fixed;
							top: calc(4.4rem + 4.5vh);
							left: 0;
							width: 100%;
							min-width: 100%;
							height: calc(100vh - 4.5vh - 4.4rem);
							transition: opacity 0.3s;
							opacity: 0;
							z-index: 0;
							justify-content: center;
							flex-direction: column;
							align-items: center;
						}

						.navbar--init {
							display: block;
							display: flex;
						}

						.navbar--open {
							display: flex;
							opacity: 1;
							z-index: 6;
						}

						.navbar--closing {
							display: block;
							display: flex;
							opacity: 0;
							z-index: 6;
						}
					}
				`}
			</style>
		</nav>
	);
};

export default NavBar;
