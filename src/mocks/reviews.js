import {getRandomInteger} from '../utils/offers';
import {AVATAR_URL} from '../const';

export const getReviews = () => {
  return {
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Name`,
    rating: getRandomInteger(1, 5),
    date: new Date(),
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    April 2019`,
  };
};

