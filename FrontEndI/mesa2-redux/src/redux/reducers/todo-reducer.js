const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':

      return {
        ...state, tasks: [...state.tasks, action.payload]
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    case 'EDIT_TASK':

      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.taskId ? {
            ...task,
            ...action.payload.updatedTask
          } : task
        ),
      };
    case 'CLEAR_TODO':

      return {
        ...state,
        tasks: [],
      };
    default:
      return state;
  }
};

export default todoReducer;