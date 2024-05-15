import icon from "../../assets/images/Icons/Up.svg";

export const formatValue = (value) => {
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(1).replace(/\.0$/, "")}B`;
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  } else {
    return value.toString();
  }
};

export const getCellColors = (value) => {
  // Extract numerical value from the string
  const numericValue = parseFloat(value.replace("%", ""));

  let backgroundColor, textColor, arrowImage;
  if (numericValue < 0) {
    backgroundColor = "bg-lightRed rounded-md  ";
    textColor = "text-deepRed";
    arrowImage = icon;
  } else {
    backgroundColor = "bg-lightGreen rounded-md ";
    textColor = "text-green1";
    arrowImage = icon;
  }
  return { backgroundColor, textColor, arrowImage };
};

export const getRotationClass = (value) => {
  if (value > 0) {
    return "rotate-180";
  } else {
    return "";
  }
};
export const getTurnoverColor = (turnover) => {
  switch (turnover) {
    case "Low":
      return "bg-orange2 m-4 px-3 rounded-md";
    case "Medium":
      return "bg-orange3 m-4 px-3 rounded-md";
    case "High":
      return "bg-orange4 m-4 px-3 rounded-md";
    default:
      return "";
  }
};

export const getTurnoverColorFocus = (focus) => {
  switch (focus) {
    case "Growth":
      return "bg-aggressive m-4 px-3 rounded-md opacity-1";
    case "Aggressive":
      return "bg-growth m-4 px-3 rounded-md opacity-1";
    case "Yield":
      return "bg-yield m-4 px-3 rounded-md";
    default:
      return "";
  }
};
