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
  let backgroundColor, textColor, arrowImage;
  if (value < 0) {
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
