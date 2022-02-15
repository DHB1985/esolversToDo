const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
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
