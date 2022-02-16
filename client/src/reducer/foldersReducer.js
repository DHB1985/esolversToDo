import {GETALLFOLDERS} from '../utils/constants'

const initialState = {
    folders: []
}

const foldersReducer = (state = initialState, action) => {
    switch (action.type) {
      case GETALLFOLDERS:
        return { ...state, folders: action.payload };
  
      default:
        return state;
    }
  };
  
  export default foldersReducer;
  