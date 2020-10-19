import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {getArray, getRandomInteger} from './utils/offers';
import {OFFERS_COUNT} from './const';

import {getOffer} from './mocks/offers';
import {getReviews} from './mocks/reviews';
import {reducer} from './store/reducer';

import {Locations} from './const';

const REVIEW_COUNT = getRandomInteger(1, 3);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const offers = getArray(OFFERS_COUNT, getOffer);
const reviews = getArray(REVIEW_COUNT, getReviews);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
        cities={Locations}
      />
    </Provider>,
    document.querySelector(`#root`)
);

