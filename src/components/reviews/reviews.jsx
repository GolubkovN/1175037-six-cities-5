import React from 'react';
import PropTypes from 'prop-types';

import {reviewTypes} from '../../types';

import ReviewsList from '../rewies-list/reviews-list';
import Reviewform from '../review-form/review-form';

const Reviews = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews} />
      <Reviewform />
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewTypes),
};

export default Reviews;
