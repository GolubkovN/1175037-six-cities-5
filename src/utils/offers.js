export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

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

export const sortOffers = (sortType, def) => {
  const someArr = def.slice();
  switch (sortType) {
    case `low to high`:
      return someArr.sort((a, b) => a.price - b.price);
    case `high to low`:
      return someArr.sort((a, b) => b.price - a.price);
    case `Top rated first`:
      return someArr.sort((a, b) => b.rating - a.rating);
    case `Popular`:
      return def;
  }
  return someArr;
};

