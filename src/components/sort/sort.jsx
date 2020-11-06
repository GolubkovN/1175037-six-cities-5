import React from 'react';
import {SORT_TYPES} from './sort-type';

const isOpened = false;

const Sort = () => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}>
        {SORT_TYPES.map((type) => <li key={type.key} className="places__option places__option--active" tabIndex="0">{type.label} {type.key}</li>)}
      </ul>
    </form>
  );
};

export default Sort;
