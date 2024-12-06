// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDj-4zwat7abWaoqOhSgczTl-RJ2MJ8Nk4",
  authDomain: "fareshare-app.firebaseapp.com",
  projectId: "fareshare-app",
  storageBucket: "fareshare-app.appspot.com",
  messagingSenderId: "887141039550",
  appId: "1:887141039550:web:3db8e577e65ff39e900def",
  measurementId: "G-14FJ7831MD",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
