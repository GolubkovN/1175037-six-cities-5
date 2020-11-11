import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import {SORT_TYPES} from './sort-type';

const Sort = ({currentSortType, changeSortType, sortIsOpen, openSort}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => openSort(!sortIsOpen)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortIsOpen && `places__options--opened`}`}>
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
  sortIsOpen: PropTypes.bool.isRequired,
  openSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: state.PROCESS.currentSortType,
  sortIsOpen: state.PROCESS.sortIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
  openSort(bool) {
    dispatch(ActionCreator.openSort(bool));
  },
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
