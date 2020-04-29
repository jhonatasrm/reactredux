import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Courses from './components/Courses';
import Sidebar from './components/Sidebar';
import Video from './components/Video';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Video />
        <Courses />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
