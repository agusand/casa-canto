import MainBanner from "../components/home/MainBanner";
import Teachers from "../components/home/Teachers";
import Why from "../components/home/Why";
import Workshops from "../components/home/Workshops";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";

import { CarouselContextProvider } from "../contexts/CarouselContext";
export default function Home() {
	return (
		<div>
			<MainBanner />
			<Why />
			<CarouselContextProvider>
				<Teachers />
			</CarouselContextProvider>
			<Workshops />
			<Experience />
			<Contact />
			<style jsx>{`
				div {
					width: 100%;
				}
			`}</style>
		</div>
	);
}
