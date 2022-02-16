import axios from "axios";

import {
  GETALLTODOS,
  GETTODOBYID,
  DATARESET,
} from "../utils/constants";

export function getAllTodos(selectedFolder) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/todos/all/${selectedFolder}`);
      return dispatch({ type: GETALLTODOS, payload: data });
    } catch (error) {
      console.log("Get all todos error: ", error);
    }
  };
}

export function putTodo(id, info, folderId) {
  return async function (dispatch) {
    try {
      await axios.put(`http://localhost:3001/todos/${id}`, { info });
      return dispatch(getAllTodos(folderId));
    } catch (error) {
      console.log("Update todo error: ", error);
    }
  };
}

export function getTodoById(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/todos/${id}`);
      return dispatch({ type: GETTODOBYID, payload: data });
    } catch (error) {
      console.log("Get TodoById error: ", error);
    }
  };
}

export function postTodo(description, folderId) {
  return async function (dispatch) {
    try {
      await axios.post(`http://localhost:3001/todos/`, { description, folderId });
      return dispatch(getAllTodos(folderId));
    } catch (error) {
      console.log("Add todo error: ", error);
    }
  };
}

export function deleteTodo(id, folderId) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      return dispatch(getAllTodos(folderId));
    } catch (error) {
      console.log("Delete todo error: ", error);
    }
  };
}

export function resetDataUpdate() {
  return {
    type: DATARESET,
    payload: "",
  };
}
