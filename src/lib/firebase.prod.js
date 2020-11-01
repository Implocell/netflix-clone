import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
	apiKey: "AIzaSyBD8O_5Cqd61c0EzGLnTv27FvQK-hVtWtM",
	authDomain: "netflix-clone-28884.firebaseapp.com",
	databaseURL: "https://netflix-clone-28884.firebaseio.com",
	projectId: "netflix-clone-28884",
	storageBucket: "netflix-clone-28884.appspot.com",
	messagingSenderId: "730378816850",
	appId: "1:730378816850:web:86387c0a3939d5e93bfe8b",
};

const firebase = Firebase.initializeApp(config);


export { firebase };
