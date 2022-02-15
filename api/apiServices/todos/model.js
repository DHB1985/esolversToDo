const { DataTypes } = require("sequelize");
const todoModel = (sequelize) => {
  sequelize.define("todo", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};

module.exports = todoModel