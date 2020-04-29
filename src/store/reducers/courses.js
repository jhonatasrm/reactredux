const INITIAL_STATE = {
  myCourses: [
    { id: 1, name: 'Code' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'UX' },
  ],
  totalCourses: 3,
};

export default function courses(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === 'ADD_COURSE') {
    return { ...state, totalCourses: state.totalCourses + action.addCourse };
  }
  if (action.type === 'REMOVE_COURSE') {
    return state.totalCourses === 0
      ? state
      : {
          ...state,
          totalCourses: state.totalCourses - action.removeCourse,
        };
  }
  return state;
}
