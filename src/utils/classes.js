export const classString = classes => {
  if (typeof classes === "Array") {
    return "";
  }
  return classes.join(" ");
};
