import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Header, Profiles } from "../components";

export function SelectProfileContainer({ user, setProfile }) {
	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
				</Header.Frame>
			</Header>
			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.Item
						onClick={() =>
							setProfile({
								displayName: user.displayName,
								photoUrl: user.photoURL,
							})
						}
						data-testid="user-profile"
					>
						<Profiles.Picture src={user.photoURL} alt="user" />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.Item>
				</Profiles.List>
			</Profiles>
		</>
	);
}
