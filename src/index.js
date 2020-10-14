import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';

import {getArray, getRandomInteger} from './utils/offers';

import {getOffer} from './mocks/offers';
import {getReviews} from './mocks/reviews';

const OFFERS_COUNT = 10;
const REVIEW_COUNT = getRandomInteger(1, 3);

const offers = getArray(OFFERS_COUNT, getOffer);
const reviews = getArray(REVIEW_COUNT, getReviews);

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);

