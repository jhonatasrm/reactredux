export function addCourse(addCourse) {
  return {
    type: 'ADD_COURSE',
    addCourse,
  };
}

export function removeCourse(removeCourse) {
  return {
    type: 'REMOVE_COURSE',
    removeCourse,
  };
}
