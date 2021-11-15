import BurguerMenu from "./BurguerMenu";
import Logo from "./Logo";
import NavBar from "./NavBar";
const Header = () => {
	return (
		<header>
			<div>
				<Logo />
				<NavBar />
				<BurguerMenu />
			</div>
			<style jsx>{`
				header {
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100vw;
					height: 7vh;
					background: transparent;
					z-index: 5;
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
