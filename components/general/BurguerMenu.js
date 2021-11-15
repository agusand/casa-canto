import { useCallback } from "react";

import { useMenuContext } from "../../contexts/MenuContext.js";
const BurguerMenu = () => {
	const { open, setOpen, setNavBarClassActive } = useMenuContext();

	const menuClickHandler = useCallback(() => {
		if (open) {
			setNavBarClassActive(" navbar--closing");
			setTimeout(() => {
				setNavBarClassActive("");
			}, 300);
			setOpen(!open);
		} else {
			setNavBarClassActive(" navbar--init");
			setTimeout(() => {
				setNavBarClassActive(" navbar--open");
			}, 1);
			setOpen(!open);
		}
	}, [open, setNavBarClassActive, setOpen]);

	return (
		<div>
			<img
				src="/assets/icons/burguer_menu.svg"
				alt="menu"
				onClick={menuClickHandler}
			/>
			<style jsx>{`
				div {
					height: 70%;
					margin-right: 1rem;
					position: relative;
					z-index: 6;
				}

				img {
					width: 100%;
					height: 100%;
					cursor: pointer;
				}

				@media (min-width: 700px) {
					div {
						display: none;
					}
				}
			`}</style>
		</div>
	);
};

export default BurguerMenu;
