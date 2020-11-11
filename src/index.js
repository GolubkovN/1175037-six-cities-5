import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './store/reducers';

const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

