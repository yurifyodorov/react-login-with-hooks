import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.scss';

import LoginForm from '../LoginForm/LoginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
};

export default App;
