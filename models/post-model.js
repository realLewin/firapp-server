var sequelize = require("../util/database");
var { DataTypes } = require("sequelize");

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
  },
  imagePath: {
    type: DataTypes.STRING,
  },
});

module.exports = Post;
