// reducers.js
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        // Lógica para adicionar uma nova tarefa ao estado
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'REMOVE_TASK':
        // Lógica para remover uma tarefa do estado
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case 'EDIT_TASK':
          return {
            ...state,
            tasks: state.tasks.map((task) =>
              task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
            ),
          };
      // Outros casos de ação e lógica de atualização do estado
      default:
        return state;
    }
  };
  
  export default todoReducer;
  