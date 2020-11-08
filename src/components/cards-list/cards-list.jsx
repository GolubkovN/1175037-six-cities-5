import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import {offerTypes} from '../../types';
import {TypeCards} from "../../const";

import Card from '../card/card';

const CardsList = ({offers, typeCard, className, changeActiveItem}) => {

  return (
    <div className={`${className} places__list tabs__content`}>

      {offers
        .map((offer, i) =>
          <Card
            key={`offer-${i}`}
            offer={offer}
            onHover={() => changeActiveItem(offer)}
            onMouseLeave={() => changeActiveItem(null)}
            typeCard={typeCard}
          />)
      }

    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offerTypes).isRequired,
  changeActiveItem: PropTypes.func.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards)),
  className: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveItem(activeItem) {
    dispatch(ActionCreator.changeActiveItem(activeItem));
  },
});

export {CardsList};
export default connect(null, mapDispatchToProps)(CardsList);
