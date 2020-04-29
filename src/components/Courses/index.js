import React from 'react';
import { connect } from 'react-redux';

import * as CourseActions from '../../store/actions/courses';

const Courses = ({ courses, dispatch }) => {
  return (
    <span>
      <br />
      Eu tenho o total de {courses} cursos!
      <button onClick={() => dispatch(CourseActions.removeCourse(1))}>-</button>
      <button onClick={() => dispatch(CourseActions.addCourse(1))}>+</button>
    </span>
  );
};

export default connect((state) => ({ courses: state.courses.totalCourses }))(
  Courses
);
