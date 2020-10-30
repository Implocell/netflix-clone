import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";

import * as ROUTES from "./constants/routes";

export default function App() {
	return (
		<Router>
			<Route exact path={ROUTES.HOME} component={Home} />
			<Route exact path={ROUTES.BROWSE} component={Browse} />
			<Route exact path={ROUTES.SIGNUP} component={Signup} />
			<Route exact path={ROUTES.SIGNIN} component={Signin} />
		</Router>
	);
}
