export const constructQueryString = (filters) => {
  if (filters?.sortBy === null) return "";
  let queryString = "";

  const transformMinMax = (minMaxObj, prefix) => {
    const startKey = `${prefix}_start`;
    const endKey = `${prefix}_end`;
    queryString += `&${startKey}=${minMaxObj.min}`;
    queryString += `&${endKey}=${minMaxObj.max}`;
  };

  Object.keys(filters).forEach((key) => {
    if (Array.isArray(filters[key])) {
      if (filters[key].length > 0) {
        queryString += `&${key}=${filters[key].join(",")}`;
      }
    } else if (typeof filters[key] === "object" && filters[key] !== null) {
      if ("min" in filters[key] && "max" in filters[key]) {
        transformMinMax(filters[key], key);
      } else {
        const options = Object.keys(filters[key]).filter(
          (option) => filters[key][option]
        );
        if (options.length > 0) {
          queryString += `&${key}=${options.join(",")}`;
        }
      }
    } else {
      queryString += `&${key}=${filters[key]}`;
    }
  });

  // Remove the leading '&' if any
  if (queryString.startsWith("&")) {
    queryString = queryString.slice(1);
  }

  return queryString;
};

// Function to format date as per the required format
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100; // Get last two digits of the year
  return `${month}/${day}/${year}`;
};

export const formatValue = (value) => {
  console.log("Formatting value:", value);

  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(1)}B`;
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  } else {
    return value.toString();
  }
};
