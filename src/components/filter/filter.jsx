import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({changeCity, cities, currentCity}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) =>
        <li key={`city-${i}`} className="locations__item">
          <a className={city === currentCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`}
            href="#"
            onClick={(evt) => changeCity(evt.target.textContent)}
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
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default Filter;
