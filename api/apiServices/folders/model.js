const { DataTypes } = require("sequelize");

const folderModel = (sequelize) => {
  sequelize.define("folder", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = folderModel