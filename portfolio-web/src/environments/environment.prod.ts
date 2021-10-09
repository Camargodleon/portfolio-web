import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const environment = {
  production: true
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMeTUcE4VvTrzqCfwHZmCO41hJOy3VG48",
  authDomain: "portfolio-web-bc3e8.firebaseapp.com",
  projectId: "portfolio-web-bc3e8",
  storageBucket: "portfolio-web-bc3e8.appspot.com",
  messagingSenderId: "672620960061",
  appId: "1:672620960061:web:764f7f037bb03aa6c68d54",
  measurementId: "G-KQ5PQD63DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
