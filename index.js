var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var postRouter = require("./routes/post");
var userMetadataRouter = require("./routes/user-metadata");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/post", postRouter);
app.use("/api/user-metadata", userMetadataRouter);

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(7777, () => {
  console.log("server start listen!");
});

// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// var firebase = require("firebase/app");
// // var XMLHttpRequest = require("xmlhttprequest-ssl").XMLHttpRequest;
// global.XMLHttpRequest = require("xmlhttprequest-ssl").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");
// require("firebase/storage");

// const firebaseConfig = {
//   apiKey: "AIzaSyBjExABRmFUnclmMM-Ys9vDvGn9UWoQjd8",
//   authDomain: "firapp-239e2.firebaseapp.com",
//   databaseURL: "https://firapp-239e2.firebaseio.com",
//   projectId: "firapp-239e2",
//   storageBucket: "firapp-239e2.appspot.com",
//   messagingSenderId: "675058299355",
//   appId: "1:675058299355:web:c47b192fb68263fbd677fe",
//   measurementId: "G-TV77DGC3JT",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Create a reference with an initial file path and name
// var storage = firebase.storage();
// var storageRef = storage.ref("images/8hro4MH.jpg");

// // storageRef = storageRef.child("images/8hro4MH.jpg");
// // console.log(storageRef);
// storageRef.delete().then((m) => console.log(m));
// storageRef
//   .getDownloadURL()
//   .then((url) => console.log(url))
//   .catch((err) => console.log(err));

//   console.log("final");

// storageRef
//   .child("images/8hro4MH.jpg")
//   .getDownloadURL()
//   .then(function (url) {
//     console.log("what?");
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     xhr.responseType = "blob";
//     xhr.onload = function (event) {
//       var blob = xhr.response;
//     };
//     xhr.open("GET", url);
//     xhr.send();

//     // Or inserted into an <img> element:
//     var img = document.getElementById("myimg");
//     img.src = url;
//     console.log("complete");
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// ---------------------------------------------------------------------
// var firebase = require("firebase-admin");
// require("firebase/storage");
// var serviceAccount = require("./serviceAccountKey.json");

// firebase.initializeApp({
//   credential: firebase.credential.cert(serviceAccount),
//   databaseURL: "https://firapp-239e2.firebaseio.com",
// });

// var storage = firebase.storage();
// var storageRef = storage.ref("images/8hro4MH.jpg");

// // storageRef = storageRef.child("images/8hro4MH.jpg");
// // console.log(storageRef);
// storageRef.delete().then((m) => console.log(m));
// storageRef
//   .getDownloadURL()
//   .then((url) => console.log(url))
//   .catch((err) => console.log(err));

// var db = firebase.database();
// var ref = db.ref("items");
// ref.once("value", function (snapshot) {
//   console.log(snapshot.val());
// });

// var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing",
//   },
//   gracehop: {
//     date_of_birth: "December 9, 1906",
//     full_name: "Grace Hopper",
//   },
// });

// console.log("work");
