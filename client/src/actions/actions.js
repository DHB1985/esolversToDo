import axios from "axios";
import { api } from "../utils/urlHostApi";

import {
  GETALLTODOS,
  GETTODOBYID,
  DATARESET,
} from "../utils/constants";

export function getAllTodos() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${api}/all`);
      return dispatch({ type: GETALLTODOS, payload: data });
    } catch (error) {
      console.log("Get all todos error: ", error);
    }
  };
}

export function putTodo(id, info) {
  return async function (dispatch) {
    try {
      await axios.put(`${api}/${id}`, { info });
      return dispatch(getAllTodos());
    } catch (error) {
      console.log("Update todo error: ", error);
    }
  };
}

export function getTodoById(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${api}/${id}`);
      return dispatch({ type: GETTODOBYID, payload: data });
    } catch (error) {
      console.log("Get TodoById error: ", error);
    }
  };
}

export function postTodo(description) {
  return async function (dispatch) {
    try {
      await axios.post(`${api}/`, { description });
      return dispatch(getAllTodos());
    } catch (error) {
      console.log("Add error: ", error);
    }
  };
}

export function deleteTodo(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${api}/${id}`);
      return dispatch(getAllTodos());
    } catch (error) {
      console.log("Delete error: ", error);
    }
  };
}

export function resetDataUpdate() {
  return {
    type: DATARESET,
    payload: "",
  };
}
