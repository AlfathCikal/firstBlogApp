// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: "first-copy-blog.firebaseapp.com",
	projectId: "first-copy-blog",
	storageBucket: "first-copy-blog.appspot.com",
	messagingSenderId: "125875916836",
	appId: "1:125875916836:web:32338f9e94e819aaea88b1",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
