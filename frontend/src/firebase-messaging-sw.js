importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
  firebase.initializeApp({
   apiKey: "AIzaSyBjh8VDTYTuSIcKL-ge8gXwPcQ1fP2d8dg",
   authDomain: "adpcare-c281a.firebaseapp.com",
   databaseURL: "https://adpcare-c281a.firebaseio.com",
   projectId: "adpcare-c281a",
   storageBucket: "adpcare-c281a.appspot.com",
   messagingSenderId: "741187255963",
   appId: "1:741187255963:web:3756bb82177496bfea503e",
   measurementId: "G-JHZ9SY5TR3"
});
const messaging = firebase.messaging();
//messaging.usePublicValidKey("BN1K8CNpfYvoRNrSgWtmLa21I4Ut42n_kNrIwgRYLww8e9GeV6Aj2FzY-_uxuU-PouQEmudmrYd3_yj-hn1eB8g");