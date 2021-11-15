import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<section id="contacto">
			<article>
				<h2 className="blackBackgroundTitle">
					Formulario <span>Contacto</span>
				</h2>
				<ContactForm />
			</article>
			<style jsx>{`
				section {
					background: var(--dark-grey-background);
				}

				article {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: column;
					height: 100%;
					gap: 10vh;
					padding: 12vh 0;
				}

				h2 {
					text-transform: uppercase;
					color: white;
					width: 50%;
					text-align: center;
				}

				span {
					display: block;
				}

				@media (max-width: 500px) {
					h2 {
						width: 80%;
						font-size: 2.5rem;
					}
				}
			`}</style>
		</section>
	);
};

export default Contact;
