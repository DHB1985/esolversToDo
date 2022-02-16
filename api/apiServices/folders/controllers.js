const dto = require("./dto");

const getFolders = async (req, res, next) => {
  try {
    const folders = await dto.getFolders();

    return res.json(folders);
  } catch (error) {
    next(error);
  }
};

const createFolder = async (req, res, next) => {
  try {
    const { name } = req.body;

    const folder = { name: name };

    const response = await dto.createFolder(folder);

    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const deleteFolder = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await dto.deleteFolder(id);

    return res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFolders,
  createFolder,
  deleteFolder,
};
