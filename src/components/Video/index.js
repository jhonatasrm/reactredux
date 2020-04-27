import React from 'react';
import { connect } from 'react-redux';

const Video = ({ activatedModule, activatedLesson }) => {
  return (
    <div>
      <strong>Módulo: </strong> <span> {activatedModule.title}</span>
      <br />
      <strong>Aula: </strong> <span>{activatedLesson.title}</span>
    </div>
  );
};

export default connect((state) => ({
  activatedModule: state.lessons.activatedModule,
  activatedLesson: state.lessons.activatedLesson,
}))(Video);
