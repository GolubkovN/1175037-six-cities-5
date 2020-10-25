import React from 'react';
import PropTypes from 'prop-types';

import {offerTypes} from '../../types';
import {TypeCards} from "../../const";

import Card from '../card/card';

const FavoriteCard = ({offer, onHover}) => {
  return (
    <React.Fragment>
      <Card offer={offer} typeCard={TypeCards.FAVORITES} onHover={onHover}/>
    </React.Fragment>
  );
};

FavoriteCard.propTypes = {
  onHover: PropTypes.func,
  offer: offerTypes.isRequired,
};

export default FavoriteCard;
