import nodemailer from "nodemailer";
import emoji from "node-emoji";

class Mailer {
	constructor(user, pass) {
		this.user = user;
		this.pass = pass;
		this.transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user,
				pass,
			},
		});
	}

	sendEmail = async ({
		from = "amandreacchi@gmail.com",
		to = "amandreacchi@gmail.com",
		subject,
		text = "",
		html = "",
	}) => {
		try {
			const mailOptions = {
				from,
				to,
				subject,
				text,
				html,
			};

			const promise = new Promise((res, rej) => {
				this.transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						console.log(error);
						rej(error);
					} else {
						console.log("Email sent: " + info.response);
						res(info.messageId);
					}
				});
			});

			const info = await promise;
			return info;
		} catch (error) {
			console.log(error);
		}
	};
}

const mailService = new Mailer("amandreacchi@gmail.com", "giladon95");

export default async function handler(req, res) {
	try {
		if (req.method === "POST") {
			const { body } = req;

			const info = await mailService.sendEmail(body);
			if (info) {
				console.log(
					emoji.get("heavy_check_mark"),
					` E-mail sended with success: ${info}`
				);
				return res.status(200).send(info);
			} else {
				throw new Error("There was an error, the e-mail couldn't be sended.");
			}
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
}
