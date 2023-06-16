// actions.js
export const addTask = task => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const removeTask = taskId => ({
    type: 'REMOVE_TASK',
    payload: taskId,
  });

  export const editTask = (taskId, updatedTask) => ({
    type: 'EDIT_TASK',
    payload: { taskId, updatedTask },
  });
  
  // Outras ações podem ser definidas aqui
  