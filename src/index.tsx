import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById('root');

const store = configureStore();

const RootApp: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

const render = (Component: React.ComponentType): void => {
  ReactDOM.render(<Component />, rootElement);
};

render(RootApp);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App/App', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
    const NextApp = require('./components/App/App').default;
    render(NextApp);
  });
}
