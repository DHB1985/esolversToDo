const folderDao = require('./dao')

const getFolders = () => {
    return folderDao.getFolders()
}

const createFolder = (name) => {
    return folderDao.createFolder(name)
}

const deleteFolder = (id) => {
    return folderDao.deleteFolder(id)
}

module.exports = {
    getFolders,
    createFolder,
    deleteFolder,
  }