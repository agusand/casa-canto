import { createContext, useContext, useState } from "react";

const CarouselContext = createContext({});

export const useCarouselContext = () => {
	return useContext(CarouselContext);
};

export const CarouselContextProvider = ({ children }) => {
	const [position, setPosition] = useState(0);
	const [slides, setSlides] = useState([]);

	return (
		<CarouselContext.Provider
			value={{
				position,
				setPosition,
				slides,
				setSlides,
			}}
		>
			{children}
		</CarouselContext.Provider>
	);
};
