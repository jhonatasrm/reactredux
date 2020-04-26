import { createStore } from 'redux';

const INITIAL_STATE = {
  activatedModule: { id: 1, title: 'Aula React (Redux)' },
  activatedLesson: { id: 1, title: 'Primeira aula Redux' },
  modules: [
    {
      id: 1,
      title: 'Aula React (Redux)',
      lessons: [
        { id: 1, title: 'Primeira aula Redux' },
        { id: 2, title: 'Segunda aula Redux' },
      ],
    },
    {
      id: 2,
      title: 'Aula React (Context API)',
      lessons: [
        { id: 1, title: 'Primeira aula Context API' },
        { id: 2, title: 'Segunda aula Context API' },
      ],
    },
  ],
};

function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activatedModule: action.module,
      activatedLesson: action.lesson,
    };
  }
  return state;
}

const store = createStore(reducer);
export default store;
