import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AuthorizationStatus} from '../../const';
import {reviewTypes} from '../../types';

import ReviewsList from '../rewies-list/reviews-list';
import Reviewform from '../review-form/review-form';

const Reviews = ({reviews, authorizationStatus}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews} />
      {authorizationStatus === AuthorizationStatus.AUTH && <Reviewform />}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewTypes),
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {Reviews};
export default connect(mapStateToProps)(Reviews);
