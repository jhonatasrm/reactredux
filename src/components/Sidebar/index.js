import React from 'react';

import { connect } from 'react-redux';
import * as LessonActions from '../../store/actions/lessons';

const Sidebar = ({ modules, dispatch }) => {
  return (
    <aside>
      <br />
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}{' '}
                <button
                  onClick={() =>
                    dispatch(LessonActions.toggleInput(module, lesson))
                  }
                >
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default connect((state) => ({ modules: state.lessons.modules }))(
  Sidebar
);
