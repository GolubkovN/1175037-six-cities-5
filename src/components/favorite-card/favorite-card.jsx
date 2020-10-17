import React from 'react';
import PropTypes from 'prop-types';

import {offerTypes} from '../../types';
import {TypeCards} from "../../const";

import Card from '../card/card';

const FavoriteCard = ({offer}) => {
  return (
    <React.Fragment>
      <Card offer={offer} typeCard={TypeCards.FAVORITES}/>
    </React.Fragment>
  );
};

FavoriteCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: offerTypes.isRequired,
};

export default FavoriteCard;
