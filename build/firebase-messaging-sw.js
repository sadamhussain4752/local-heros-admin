importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// "Default" Firebase configuration (prevents errors)
const defaultConfig = {
    apiKey: "AIzaSyDMguC1dI-VB9j5bn_qyZPW68DzyYsipyE",
    authDomain: "winterbear-c7778.firebaseapp.com",
    projectId: "winterbear-c7778",
    storageBucket: "winterbear-c7778.appspot.com",
    messagingSenderId: "341784179475",
    appId: "1:341784179475:web:6e1718fc6786fee3bfa0e6",
    measurementId: "G-FZ5SZZC8T6"
};

// Initialize Firebase app
firebase.initializeApp(defaultConfig);
const messaging = firebase.messaging();

//Listens for background notifications
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  //customise notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icon.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});