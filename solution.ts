const formatValue = (value: string | number | boolean) => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  }
};

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

const getLength = (value: string | Array<number>) => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
};

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));