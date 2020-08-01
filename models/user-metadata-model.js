var sequelize = require("../util/database");
var { DataTypes } = require("sequelize");

const User_Metadata = sequelize.define("User_Metadata", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_gender: {
    type: DataTypes.STRING,
  },
  user_birth: {
    type: DataTypes.STRING,
  },
  user_bio: {
    type: DataTypes.STRING,
  },
});

module.exports = User_Metadata;
