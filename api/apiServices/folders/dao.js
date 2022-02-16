const {Todo, Folder} = require('../../services/db')

const getFolders = async () =>{
    return await Folder.findAll()
}

const createFolder = async (name) => {
    return await Folder.create(name)
}

const deleteFolder = async (id) => {
    const todos = await Folder.findOne({
        where: { id: id },
        include: { model: Todo, attributes: ["id"] },
      }).then((value) => value.todos);
      todos.forEach(async element => {
          await Todo.destroy({where: {id: element.id}})
      });
    return await Folder.destroy({where: {id: id}})
}


module.exports = {
    getFolders,
    createFolder,
    deleteFolder,
  }