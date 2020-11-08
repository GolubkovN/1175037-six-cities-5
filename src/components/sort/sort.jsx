import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import {SORT_TYPES} from './sort-type';

// const isOpened = false;

const Sort = ({currentSortType, changeSortType}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${`places__options--opened`}`}>
        {SORT_TYPES.map((type) => {
          return (
            <li key={type.key}
              className={`places__option ${currentSortType === type.key && `places__option--active`}`}
              tabIndex="0"
              onClick={() => {
                changeSortType(type.key);
              }}>
              {type.label} {type.key}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
