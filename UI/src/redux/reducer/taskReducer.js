const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Task": {
      return {
        ...state, // it will copy all the properties
        tasks: [...state.tasks, action.payload.Task], // Add new Tasks
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
