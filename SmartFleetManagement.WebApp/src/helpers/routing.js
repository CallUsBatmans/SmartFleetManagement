import queryString from 'query-string';

const getValueFromQueryString = (name, location) => {
  const values = queryString.parse(location.search);
  return values[name];
};

export const routing = {
  getValueFromQueryString
};
