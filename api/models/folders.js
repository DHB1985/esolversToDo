const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("folders", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
