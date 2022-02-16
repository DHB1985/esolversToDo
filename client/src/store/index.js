import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import todosReducer from "../reducer/todosReducer";
import foldersReducer from "../reducer/foldersReducer";

const rootReducer = combineReducers({todos: todosReducer,folders: foldersReducer});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
