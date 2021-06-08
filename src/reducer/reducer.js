import {ADD_TASK,DELETE_TASK,DONE_TASK,EDIT_TASK } from '../Constants/actionsTypes'





const initialState = {
    listTasks: [{id:1,text:"hello",isDone:false}]
    
  };
  
  const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return { ...state, listTasks: [...state.listTasks, action.payload]
         };

        case DELETE_TASK:
          return {...state, listTasks:[...state.listTasks.filter((el) => el.id !== action.payload)],
          };

          case DONE_TASK:
            return { ...state,listTasks: state.listTasks.map((el) =>el.id === action.payload ? { ...el, isDone: !el.isDone } : el
              ),
            };

            case EDIT_TASK:
              return {
                ...state,listTasks: state.listTasks.map((el) =>el.id === action.payload.id ? { ...el, text:action.payload.text } : el
                ),
              };


        default:
        return state;
    }
  };

        export default TaskReducer;


