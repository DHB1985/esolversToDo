const { DataTypes } = require("sequelize");

const folderModel = (sequelize) => {
  sequelize.define("folder", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = folderModel