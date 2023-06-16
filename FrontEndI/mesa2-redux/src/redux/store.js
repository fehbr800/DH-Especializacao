// store.js
import { createStore } from 'redux';
import todoReducer from './reducers/todo-reducer';

const initialState = {
  tasks: [],
  filters: {
    // Defina seus filtros iniciais aqui
  },
};

const store = createStore(todoReducer, initialState);

export default store;
