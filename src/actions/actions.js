import {ADD_TASK,DELETE_TASK,DONE_TASK,EDIT_TASK} from '../Constants/actionsTypes'

export const add = (payload) => {
    return {
      type: ADD_TASK,
      payload,
    };
  };

  export const deleteTask = (payload) => {
    console.log(payload)
    return {
      type: DELETE_TASK,
      payload,
    };
  };

  export const doneTask = (payload) => {
    return {
      type: DONE_TASK,
      payload,
    };
  };

  export const editTask = (payload) => {
    return {
      type: EDIT_TASK,
      payload,
    };
  };