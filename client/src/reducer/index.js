import {
  GETALLTODOS,
  GETTODOBYID,
  DATARESET,
} from "../utils/constants";

const initialState = {
  todos: [],
  todoEdit: {},
  folders: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALLTODOS:
      return { ...state, todos: action.payload };

    case GETTODOBYID:
      return { ...state, todoEdit: action.payload };

    case DATARESET:
      return { ...state, todoEdit: {} };

    default:
      return state;
  }
};

export default rootReducer;
