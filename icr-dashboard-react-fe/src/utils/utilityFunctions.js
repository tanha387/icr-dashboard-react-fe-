export const constructQueryString = (filters) => {
  if (filters?.sortBy === null) return '';
  let queryString = '';

  Object.keys(filters).forEach((key) => {
    if (Array.isArray(filters[key])) {
      if (filters[key].length > 0) {
        queryString += `&${key}=${filters[key].join(',')}`;
      }
    } else if (typeof filters[key] === 'object' && filters[key] !== null) {
      if ('min' in filters[key] && 'max' in filters[key]) {
        queryString += `&${key}=${filters[key].min},${filters[key].max}`;
      } else {
        const options = Object.keys(filters[key]).filter(option => filters[key][option]);
        if (options.length > 0) {
          queryString += `&${key}=${options.join(',')}`;
        }
      }
    } else {
      queryString += `&${key}=${filters[key]}`;
    }
  });

  // Remove the leading '&' if any
  if (queryString.startsWith('&')) {
    queryString = queryString.slice(1);
  }

  return queryString;
};