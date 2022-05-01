// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// ? FB = Firebase. NOT Facebook

const API_KEY_FB = process.env.REACT_APP_API_KEY_FB;
const AUTH_DOMAIN_FB = process.env.REACT_APP_AUTH_DOMAIN_FB;
const PROJECT_ID_FB = process.env.REACT_APP_PROJECT_ID_FB;
const STORAGE_BUCKET_FB = process.env.REACT_APP_STORAGE_BUCKET_FB;
const MESSAGING_SENDER_ID_FB = process.env.REACT_APP_MESSAGING_SENDER_ID_FB;
const APP_ID_FB = process.env.REACT_APP_APP_ID_FB;

const firebaseConfig = {
  apiKey: API_KEY_FB,
  authDomain: AUTH_DOMAIN_FB,
  projectId: PROJECT_ID_FB,
  storageBucket: STORAGE_BUCKET_FB,
  messagingSenderId: MESSAGING_SENDER_ID_FB,
  appId: APP_ID_FB,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
