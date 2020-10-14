export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

export const getBooleanValue = () => Boolean(getRandomInteger(0, 1));

export const getRandomPhotos = () => ({url: `http://picsum.photos/248/152?r=${Math.random()}`});

export const getRating = (rating) => Math.round(rating / 5 * 100) + `%`;

export const getOffersByLocation = (offers) => {
  const map = new Map();
  offers.forEach((offer) => {
    const location = offer.location;
    map.set(location, map.get(location) || []);
    map.get(location).push(offer);
  });
  return map;
};

export const getArray = (count, func) => new Array(count).fill(``).map(func);
