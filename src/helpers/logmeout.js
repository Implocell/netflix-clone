import { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function LogMeOut() {
	const { firebase } = useContext(FirebaseContext);

	firebase.auth().signOut();

	return <div>Logged Out!</div>;
}
