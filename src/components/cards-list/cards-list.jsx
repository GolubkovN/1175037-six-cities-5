import React from 'react';
import PropTypes from 'prop-types';
import {offerTypes} from '../../types';
import {withActiveItem} from '../../hocs/with-active-item';
import {TypeCards} from "../../const";

import Card from '../card/card';

const CardsList = ({offers, onHover, onMouseLeave, typeCard, className}) => {

  return (
    <div className={`${className} places__list tabs__content`}>

      {offers
        .map((offer, i) =>
          <Card
            key={`offer-${i}`}
            offer={offer}
            typeCard={typeCard}
            onHover={onHover}
            onMouseLeave={onMouseLeave}/>)
      }

    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offerTypes).isRequired,
  onHover: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards)),
  className: PropTypes.string.isRequired,
};

export default withActiveItem(CardsList);
