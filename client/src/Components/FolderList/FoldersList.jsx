import React from "react";
import { useDispatch } from "react-redux";
import { deleteFolder } from "../../actions/actionsFolders";

import styles from './folderList.module.css'

const FoldersList = ({ folders, setSelectedFolder, setNameFolder }) => {
  const dispatch = useDispatch();

  const handleClick = (event) =>{
    setNameFolder(event.target.textContent)
    setSelectedFolder(parseInt(event.target.id))
  }

  const handleDelete = (event) => {
    dispatch(deleteFolder(event.target.value));
  };

  return (
    <div>
      {folders &&
        folders.map((folder) => {
          return (
            <div key={folder.id} className={styles.folderList}>
              <p id={folder.id} onClick={(event) => handleClick(event)}>
                {folder.name}
              </p>
              <button
                value={folder.id}
                onClick={(event) => handleDelete(event)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default FoldersList;
