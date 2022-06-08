import React, { useState } from "react";
import * as C from "./styles";
import "animate.css";

/* recomendado: react hook form */

function Cupoms() {
	const [values, setValues] = useState({
		name: "",
		email: "",
	});

	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);

	const handleNameInputChange = (e: any) => {
		setValues({ ...values, name: e.target.value });
	};

	const handleEmailInputChange = (e: any) => {
		setValues({ ...values, email: e.target.value });
	};

	const handleSubmit = () => {
		if (values.name && values.email) {
			setValid(true);
		}
		setSubmitted(true);
	};

	return (
		<C.Cupom>
			<div
				id="discount"
				className="registerForm animate__animated animate__fadeInRightBig"
			>
				<h3 className="subscribeTitle">
					Subscribe and receive amazing discounts in exclusive games!
				</h3>
				{submitted && valid ? (
					<div className="sucess message">
						Success! Thank you for registering
					</div>
				) : null}
				<input
					onChange={handleNameInputChange}
					value={values.name}
					className="formField"
					placeholder="Your Name"
					name="Name"
				/>
				{submitted && !values.name ? (
					<span>Please enter your name</span>
				) : null}
				<input
					onChange={handleEmailInputChange}
					value={values.email}
					className="formField"
					placeholder="E-mail"
					name="Email"
				/>
				{submitted && !values.email ? (
					<span>Please enter your E-mail</span>
				) : null}
				<button
					className="formField"
					type="button"
					onClick={handleSubmit}
				>
					Subscribe
				</button>
			</div>
		</C.Cupom>
	);
}

export default Cupoms;
