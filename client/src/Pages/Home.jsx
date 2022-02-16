import React from "react";
import { useState } from "react";
import Folder from "../Components/Layout/Folder";
import Todo from "../Components/Layout/Todo";

import styles from './home.module.css'

const Home = () => {
  const [selectedFolder, setSelectedFolder] = useState("");
  const [nameFolder, setNameFolder] = useState("");

  return (
    <div className={styles.home}>
      <Folder
        setSelectedFolder={setSelectedFolder}
        setNameFolder={setNameFolder}
        nameFolder={nameFolder}
      />

      {selectedFolder && (
        <Todo selectedFolder={selectedFolder} nameFolder={nameFolder} />
      )}
    </div>
  );
};

export default Home;
