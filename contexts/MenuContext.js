import { createContext, useContext, useState } from "react";

const MenuContext = createContext({});

export const useMenuContext = () => {
	return useContext(MenuContext);
};
export const MenuContextProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [navBarClassActive, setNavBarClassActive] = useState("");

	return (
		<MenuContext.Provider
			value={{
				open,
				setOpen,
				navBarClassActive,
				setNavBarClassActive,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};
