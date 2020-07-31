// var Post = require("../models/post-model");

// exports.insertPost = (req, res, next) => {
//   const postData = req.body;

//   Post.sync()
//     .then(async () => {
//       await Post.create({ title: postData.title, content: postData.content });
//       console.log("insert successful!");
//     })
//     .catch((err) => console.log(err));

//   console.log(req.body);
//   res.send(JSON.stringify("post reques work!"));
// };

// exports.getPost = (req, res, next) => {
//   Post.sync()
//     .then(async () => {
//       const posts = await Post.findAll({
//         attributes: ["title", "content"],
//       });
//       let result = [];
//       posts.forEach((m) => result.push(m.dataValues));
//       console.log(result);

//       console.log("suc");
//       res.send(JSON.stringify(result));
//     })
//     .catch((err) => console.log(err));
// };
