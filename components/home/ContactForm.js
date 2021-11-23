import { useCallback, useState } from "react";
import axios from "axios";

const ContactForm = () => {
	const [isError, setIsError] = useState(false);
	const [isOk, setIsOk] = useState(false);

	const formSubmitHandler = useCallback(async (event) => {
		try {
			setIsError(false);
			setIsOk(false);

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
			<p><b>País de residencia:</b> ${usefulFormData.country}</p>
			<p><b>Ciudad:</b> ${usefulFormData.city}</p>
			<p><b>Teléfono:</b> ${usefulFormData.phone}</p>
			<p><b>E-mail:</b> ${usefulFormData.email}</p>
			<p><b>Mensaje:</b> ${usefulFormData.message}</p>`;

			const response = await axios.post("http://localhost:3000/api/mail", {
				subject: `Mensaje de ${usefulFormData.name} - Casa Canto`,
				html: htmlTemplate,
			});

			if (response.status === 200) {
				event.target.reset();
				setIsOk(true);
				setTimeout(() => {
					setIsError(false);
					setIsOk(false);
				}, 3000);
			}
		} catch (error) {
			setIsError(true);
			setTimeout(() => {
				setIsError(false);
				setIsOk(false);
			}, 3000);
			console.log(error);
		}
	}, []);

	return (
		<form onSubmit={formSubmitHandler}>
			<fieldset className="whiteBackgroundTextBody">
				<input type="text" name="name" required placeholder="Nombre:" />
				<input type="text" name="lastname" required placeholder="Apellido:" />
				<input
					type="text"
					name="country"
					required
					placeholder="País de residencia:"
				/>
				<input type="text" name="city" required placeholder="Ciudad:" />
				<input type="text" name="phone" required placeholder="Teléfono:" />
				<input
					type="text"
					name="email"
					required
					placeholder="Correo electrónico:"
				/>
				<textarea placeholder="Mensaje:" required name="message" />
			</fieldset>
			<div>
				<button type="submit" className="buttonFont">
					Enviar
				</button>
				<p className="formFooter">
					o contactanos directamente: casacanto1070@gmail.com
				</p>
			</div>
			<p className="message">
				{isError
					? "El correo no pudo enviarse."
					: isOk
					? "El correo fue enviado con éxito!"
					: ""}
			</p>
			<style jsx>{`
				form {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					width: min(100%, 50rem);
					position: relative;
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

				.formFooter {
					position: relative;
					color: var(--legend-text);
					font-size: 1.2rem;
					width: min(16rem, 48%);
					font-family: "Roboto";
				}
				.formFooter::before {
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

				.message {
					color: white;
					text-align: center;
					font-family: "Roboto";
					position: absolute;
					bottom: -3rem;
					width: 100%;
					font-size: 1.5rem;
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

					.formFooter::before {
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
