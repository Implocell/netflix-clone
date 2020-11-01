import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks";
import LogMeOut from "./helpers/logmeout";

export default function App() {
	const user = useAuthListener();

	return (
		<Router>
			<IsUserRedirect
				user={user}
				loggedInPath={ROUTES.BROWSE}
				path={ROUTES.SIGNIN}
				exact
			>
				<Signin />
			</IsUserRedirect>
			<IsUserRedirect
				user={user}
				loggedInPath={ROUTES.BROWSE}
				path={ROUTES.SIGNUP}
				exact
			>
				<Signup />
			</IsUserRedirect>
			<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
				<Browse />
			</ProtectedRoute>
			<IsUserRedirect
				user={user}
				loggedInPath={ROUTES.BROWSE}
				path={ROUTES.HOME}
				exact
			>
				<Home />
			</IsUserRedirect>
			<Route path="/logmeout" exact component={LogMeOut} />
		</Router>
	);
}
