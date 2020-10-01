import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';

const Settings = {
  OFFERS_COUNT: 173,
};

ReactDOM.render(
    <App offersCount={Settings.OFFERS_COUNT} />,
    document.querySelector(`#root`)
);

