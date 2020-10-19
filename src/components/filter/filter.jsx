import React from 'react';
import PropTypes from 'prop-types';

import {Locations} from '../../const';

const Filter = ({changeCity, currentCity}) => {
  return (
    <ul className="locations__list tabs__list">
      {Locations.map((city, i) =>
        <li key={`city-${i}`} className="locations__item">
          <a className={city === currentCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`}
            href="#"
            onClick={changeCity}
          >
            <span>{city}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

Filter.propTypes = {
  changeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default Filter;
