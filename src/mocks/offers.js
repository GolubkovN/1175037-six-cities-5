import {
  getRandomInteger,
  getBooleanValue,
  getRandomElement,
  getRandomPhotos,
} from '../utils/offers';
import {TypeOfHousing, AVATAR_URL, COORDINATES} from '../const';

const HOUSING_TYPES = Object.values(TypeOfHousing);
const PHOTOS = new Array(getRandomInteger(3, 6)).fill(``).map(getRandomPhotos);


export const getOffer = () => {
  return {
    id: String(getRandomInteger(1, 4)),
    location: `Amsterdam`,
    coordinates: getRandomElement(COORDINATES),
    title: `just the title of the offer ` + getRandomInteger(1, 5),
    picture: {
      alt: `just the title of the offer`,
      src: `http://picsum.photos/248/152?r=${Math.random()}`,
    },
    isPremium: getBooleanValue(0, 1),
    isFavorite: getBooleanValue(0, 1),
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
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Name Surname`,
      isSuper: getBooleanValue(0, 1),
    }
  };
};

// const offer = getOffer();
