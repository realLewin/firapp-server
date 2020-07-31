// var firebase = require("firebase");
// var express = require("express");

// var router = express.Router();

// var storage = firebase.storage();
// // The root reference:
// var storageRef = storage.ref("gs://firapp-239e2.appspot.com/7nK9eKV.png");

// router.get("/get", (req, res, next) => {
//   console.log("work");
//   res.send("hello");
// });

// storageRef
//   .getDownloadURL()
//   .then(function (url) {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = "blob";
//     xhr.onload = function (event) {
//       var blob = xhr.response;
//     };
//     xhr.open("GET", url);
//     xhr.send();

//     // Or inserted into an <img> element:
//     // var img = document.getElementById("myimg");
//     // img.src = url;
//   })
//   .catch(function (error) {
//     console.log(error);
//     // Handle any errors
//   });

// module.exports = router;
