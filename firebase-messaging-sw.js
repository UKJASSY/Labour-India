importScripts('https://www.gstatic.com/firebasejs/12.12.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.12.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDnKnye9eVcaX2B84HVaTElXTIgOKz6SDA",
  authDomain: "labour-india-4746e.firebaseapp.com",
  projectId: "labour-india-4746e",
  messagingSenderId: "241559783436",
  appId: "1:241559783436:web:b867e149f0f0fcd1bf4629"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
