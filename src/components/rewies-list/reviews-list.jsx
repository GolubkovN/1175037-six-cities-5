import React from 'react';
import PropTypes from 'prop-types';

import {reviewTypes} from '../../types';

import Review from '../review/review';

const Reviewslist = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review, i) =>
        <Review key={`review-${i}`} review={review} />
      )}
    </ul>
  );
};

Reviewslist.propTypes = {
  reviews: PropTypes.arrayOf(reviewTypes).isRequired,
};

export default Reviewslist;
