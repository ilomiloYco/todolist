const defaultState = {
  inputValue: "",
  todoList: [],
  doneList: [],
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "UPDATE_INPUTVALUE": {
      newState.inputValue = action.payload;
      return newState;
    }
    case "ADD_TODOITEM": {
      newState.todoList.push(newState.inputValue);
      newState.inputValue = "";
      return newState;
    }
    case "DELETE_TODOITEM": {
      newState.todoList.splice(action.index, 1);
      return newState;
    }
    case "ADD_DONEITEM": {
      newState.doneList.push(newState.todoList[action.index]);
      newState.todoList.splice(action.index, 1);
      return newState;
    }

    case "DELETE_DONEITEM": {
      newState.doneList.splice(action.index, 1);
      return newState;
    }
    default:
      return newState;
  }
};
