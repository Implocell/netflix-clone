import { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";

export default function Signup() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [firstName, setFirstName] = useState("");
	const [emailAdress, setEmailAdress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid = password === "" || emailAdress === "" || firstName === "";

	const handleSignUp = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.createUserWithEmailAndPassword(emailAdress, password)
			.then((result) =>
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5 + 1),
					})
					.then(() => {
						history.push(ROUTES.BROWSE);
					})
			)
			.catch((e) => {
				setPassword("");
				setEmailAdress("");
				setFirstName("");
				setError(e.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignUp}>
						<Form.Input
							placeholder="First name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder="Email address"
							value={emailAdress}
							onChange={({ target }) => setEmailAdress(target.value)}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							autoComplete="off"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit
							disabled={isInvalid}
							type="submit"
							data-testid="sign-up"
						>
							Sign Up
						</Form.Submit>
						<Form.Text>
							Already a user?
							<Form.Link to={ROUTES.SIGNIN}>Sign in now!</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is proteted by Gogle reCAPTCHA to ensure you're not a
							bot
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
