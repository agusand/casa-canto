import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import BurguerMenu from "./BurguerMenu";
import Logo from "./Logo";
import NavBar from "./NavBar";
const Header = () => {
	const [isInTop, setIsInTop] = useState(true);

	const { pathname } = useRouter();

	useEffect(() => {
		const setIfIsInTop = (event) => {
			if (event.target.body.getBoundingClientRect().top < -20) {
				setIsInTop(true);
			} else if (isInTop) {
				setIsInTop(false);
			}
		};

		window.addEventListener("scroll", setIfIsInTop);

		return () => {
			window.removeEventListener("scroll", setIfIsInTop);
		};
	}, [isInTop, pathname]);
	return (
		<header>
			<div>
				<Logo />
				<NavBar />
				<BurguerMenu />
			</div>
			<style jsx>{`
				header {
					position: fixed;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100vw;
					height: 7vh;
					background: ${pathname != "/nosotros"
						? isInTop
							? "black"
							: "transparent"
						: "black"};
					z-index: 5;
					transition: background 0.3s;
				}

				div {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 80%;
					height: 80%;
				}

				@media (max-width: 500px) {
					header {
						background: black;
						position: fixed;
						top: 0;
					}
					div {
						flex-direction: row-reverse;
						height: 70%;
					}
				}
			`}</style>
		</header>
	);
};

export default Header;
