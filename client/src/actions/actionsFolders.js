import axios from 'axios'

import {GETALLFOLDERS} from '../utils/constants'

export function getAllFolders () {
    return async function (dispatch) {
        try {
          const { data } = await axios.get(`http://localhost:3001/folders/all`);
          return dispatch({ type: GETALLFOLDERS, payload: data });
        } catch (error) {
          console.log("Get all folders error: ", error);
        }
      };
}

export function postFolder(name) {
    return async function (dispatch) {
      try {
        await axios.post(`http://localhost:3001/folders/`, { name });
        return dispatch(getAllFolders());
      } catch (error) {
        console.log("Add folder error: ", error);
      }
    };
  }
  
  export function deleteFolder(id) {
    return async function (dispatch) {
      try {
        await axios.delete(`http://localhost:3001/folders/${id}`);
        return dispatch(getAllFolders());
      } catch (error) {
        console.log("Delete folder error: ", error);
      }
    };
  }