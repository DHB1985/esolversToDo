import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFolders } from "../../actions/actionsFolders";
import AddFolder from "../AddFolder/AddFolder";
import FoldersList from "../FolderList/FoldersList";

const Folder = ({ setSelectedFolder, setNameFolder, nameFolder }) => {
  const dispatch = useDispatch();

  const { folders } = useSelector((state) => state.folders);

  useEffect(() => {
    dispatch(getAllFolders());
  }, []);

  return (
    <div>
      <h3>Folders List</h3>
      <h5>Folder: {nameFolder}</h5>
      <AddFolder />
      <FoldersList
        folders={folders}
        setSelectedFolder={setSelectedFolder}
        setNameFolder={setNameFolder}
      />
    </div>
  );
};

export default Folder;
