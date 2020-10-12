import {
  generateId,
  getRandomInteger,
  getBooleanValue,
  getRandomElement,
  getRandomArray,
} from '../utils/offers';
import {TypeOfHousing} from '../const';

const HOUSING_TYPES = Object.values(TypeOfHousing);
const PHOTOS = new Array(getRandomInteger(1, 5)).fill(``).map(getRandomArray);

export default {
  id: generateId(),
  location: `Amsterdam`,
  title: `just the title of the offer ` + getRandomInteger(1, 5),
  picture: {
    alt: `just the title of the proposal`,
    src: `http://picsum.photos/248/152?r=${Math.random()}`,
  },
  isPremium: getBooleanValue(0, 1),
  description: `Some text ` + getRandomInteger(1, 5),
  rating: getRandomInteger(1, 5),
  price: getRandomInteger(80, 200),
  type: getRandomElement(HOUSING_TYPES),
  photos: PHOTOS,
  Bedrooms: getRandomInteger(1, 3),
  guests: getRandomInteger(1, 5),
  features: {
    Wifi: getBooleanValue(0, 1),
    Heating: getBooleanValue(0, 1),
    Kitchen: getBooleanValue(0, 1),
    CableTV: getBooleanValue(0, 1),
  },
  owner: {
    avatar: `http://picsum.photos/248/152?r=${Math.random()}`,
    name: `Name Lastname`,
    isSuper: getBooleanValue(0, 1),
  }
};

