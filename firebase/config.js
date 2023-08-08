import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDb_-iqbGL-y5N49eCO41v3_pX4YxNFUm8",
	authDomain: "awesome-project-e68d6.firebaseapp.com",
	projectId: "awesome-project-e68d6",
	storageBucket: "awesome-project-e68d6.appspot.com",
	messagingSenderId: "83818551548",
	appId: "1:83818551548:web:af032033c0d30e76d2df79",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);
