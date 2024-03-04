import { initializeApp } from "@firebase/app";

import { getMessaging } from "@firebase/messaging";

//Firebase Config values imported from .env file
const firebaseConfig = {
    apiKey: "AIzaSyAmx1Mx1GtqheoDvGCVGn3-zBCkY6hPTWI",
    authDomain: "email-js-1a09b.firebaseapp.com",
    projectId: "email-js-1a09b",
    storageBucket: "email-js-1a09b.appspot.com",
    messagingSenderId: "931663983832",
    appId: "1:931663983832:web:aa98d896008846a2c1d3ad",
    measurementId: "G-4LYKC20TGZ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);