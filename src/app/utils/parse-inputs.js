// converts strings to array of numbers
export const parseInputs = (...input) => {
  return input.map((str) => parseInt(str));
};
