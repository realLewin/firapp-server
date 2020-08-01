var User_Metadata = require("../models/user-metadata-model");

exports.get = (req, res, next) => {
  console.log("get");
};
exports.post = (req, res, next) => {
  const postData = req.body;

  /*{ force: true }*/
  User_Metadata.sync()
    .then(async () => {
      await User_Metadata.create({
        email: postData.find((e) => e.name === "email").value,
        first_name: postData.find((e) => e.name === "firstName").value,
        last_name: postData.find((e) => e.name === "lastName").value,
        user_gender: postData.find((e) => e.name === "gender").value,
        user_birth: postData.find((e) => e.name === "birthday").value,
        user_bio: postData.find((e) => e.name === "bio").value,
        // email: postData[0].value,
        // first_name: postData[1].value,
        // last_name: postData[2].value,
        // user_gender: postData[3].value,
        // user_birth: postData[4].value,
        // user_bio: postData[5].value,
      });
      console.log("insert successful!");
      res.send(JSON.stringify(postData));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify("failed"));
    });
};

// exports.getPost = (req, res, next) => {
//   Post.sync()
//     .then(async () => {
//       const posts = await Post.findAll({
//         attributes: ["title", "content", "imagePath"],
//       });
//       let result = [];
//       posts.forEach((m) => result.push(m.dataValues));
//       console.log(result);

//       console.log("suc");
//       res.send(JSON.stringify(result));
//     })
//     .catch((err) => console.log(err));
// };
