import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
	const [content, setContent] = useState([]);
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		console.log("UseContent UseEffect");
		firebase
			.firestore()
			.collection(target)
			.get()
			.then((snapshot) => {
				const allContent = snapshot.docs.map((contentObj) => ({
					...contentObj.data(),
					docId: contentObj.id,
				}));
				setContent(allContent);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [target, firebase]);

	return { [target]: content };
}
