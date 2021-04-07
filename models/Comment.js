const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config.js");

class Comment extends Model {}

Comment.init(
  {
    body: DataTypes.STRING,
  },
  { sequelize }
);

module.exports = Comment;
