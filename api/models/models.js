// const { DataTypes } = require("sequelize");
// const todoModel = (sequelize) => {
//   sequelize.define("todo", {
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     done: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//   });
// };
// //console.log('modelo todo', todoModel)

// module.exports = todoModel
const todoModel = require('../apiServices/todos/model')
const folderModel = require('../apiServices/folders/model')

module.exports = {todoModel, folderModel}