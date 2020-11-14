import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {ActionCreator} from './store/action';
import {fetchOffers} from './store/api-action';
import RootReducer from './store/reducers';

import {AuthorizationStatus} from './const';
import App from './components/App/app';

const {requiredAuth} = ActionCreator;
const api = createApi(() => store.dispatch(requiredAuth(AuthorizationStatus.NO_AUTH)));

// store ?
// dispatch ?
// Middleware ?

const store = createStore(
    RootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(fetchOffers());
// store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

