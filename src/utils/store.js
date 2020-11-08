export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filterByLocation = (arr, what) => {
  const result = arr.filter(({location}) => location === what);
  return result;
};

