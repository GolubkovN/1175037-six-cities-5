import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import {getOffer} from './mocks/offers';

const OFFERS_COUNT = 4;

const offers = new Array(OFFERS_COUNT).fill(``).map(getOffer);

ReactDOM.render(
    <App
      offers={offers}
    />,
    document.querySelector(`#root`)
);

