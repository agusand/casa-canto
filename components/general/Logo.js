import Link from "next/link";
const Logo = () => {
	return (
		<figure>
			<Link href="/">
				<a>
					<img src="/assets/images/logo.svg" alt="Casa Canto" />
				</a>
			</Link>
			<style jsx>{`
				figure {
					position: relative;
					z-index: 6;
					height: 90%;
				}

				a {
					display: block;
					height: 100%;
					display: flex;
					align-items: center;
				}

				img {
					height: 100%;
					object-fit: contain;
				}
			`}</style>
		</figure>
	);
};

export default Logo;
