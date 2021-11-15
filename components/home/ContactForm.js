import { useCallback } from "react";
import axios from "axios";

const ContactForm = () => {
	const formSubmitHandler = useCallback(async (event) => {
		try {
			event.preventDefault();

			const formData = new FormData(event.target);

			const usefulFormData = {
				name: formData.get("name"),
				lastname: formData.get("lastname"),
				country: formData.get("country"),
				city: formData.get("city"),
				phone: formData.get("phone"),
				email: formData.get("email"),
				message: formData.get("message"),
			};

			const htmlTemplate = `
			<p><b>Nombre y apellido:</b> ${usefulFormData.name} ${usefulFormData.lastname}</p>
			<p><b>País de residencia:</b>${usefulFormData.country}</p>
			<p><b>Ciudad:</b> ${usefulFormData.city}</p>
			<p><b>Teléfono:</b> ${usefulFormData.phone}</p>
			<p><b>E-mail:</b> ${usefulFormData.email}</p>
			<p><b>Mensaje:</b> ${usefulFormData.message}</p>`;

			const response = await axios.post("http://localhost:3000/api/mail", {
				subject: `Mensaje de ${usefulFormData.name} - Casa Canto`,
				html: htmlTemplate,
			});

			response.status === 200 && event.target.reset();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<form onSubmit={formSubmitHandler}>
			<fieldset className="whiteBackgroundTextBody">
				<input type="text" name="name" placeholder="Nombre:" />
				<input type="text" name="lastname" placeholder="Apellido:" />
				<input type="text" name="country" placeholder="País de residencia:" />
				<input type="text" name="city" placeholder="Ciudad:" />
				<input type="text" name="phone" placeholder="Teléfono:" />
				<input type="text" name="email" placeholder="Correo electrónico:" />
				<textarea placeholder="Mensaje:" name="message" />
			</fieldset>
			<div>
				<button type="submit" className="buttonFont">
					Enviar
				</button>
				<p>o contactanos directamente: correo@gmail.com</p>
			</div>
			<style jsx>{`
				form {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					width: min(100%, 50rem);
				}

				fieldset {
					border: none;
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(2, 1fr));
					grid-template-rows: auto;
					gap: 1rem;
					width: 100%;
				}

				input {
					padding: 1rem;
					border-radius: 10px;
					background: var(--grey-background);
					border: none;
					font-size: 1rem;
					color: white;
					max-width: 100%;
				}

				textarea {
					padding: 1rem;
					border-radius: 10px;
					background: var(--grey-background);
					border: none;
					font-size: 1rem;
					resize: none;
					height: 15vh;
					grid-column: span 2;
					color: white;
				}

				div {
					display: flex;
					justify-content: space-between;
					height: min(5rem, 6.7vh);
					align-items: center;
					width: min(100%, 40rem);
				}

				button {
					width: min(16rem, 48%);
					height: 80%;
					line-height: 2.5em;
				}

				p {
					position: relative;
					color: var(--legend-text);
					font-size: 1.2rem;
					width: min(16rem, 48%);
					font-family: "Roboto";
				}
				p::before {
					position: absolute;
					left: -25%;
					top: 50%;
					transform: translateY(-50%);
					display: block;
					content: "";
					width: 1px;
					height: 100%;
					background-color: var(--legend-text);
				}

				@media (max-width: 450px) {
					form {
						gap: 3rem;
					}

					input {
						grid-column: span 2;
					}

					input {
						padding: 1.5rem;
						font-size: 1.5rem;
					}

					textarea {
						padding: 1.5rem;
						font-size: 1.5rem;
					}

					p::before {
						left: -6%;
						height: 130%;
					}

					button {
						font-size: 1.2rem;
					}
				}
			`}</style>
		</form>
	);
};

export default ContactForm;
