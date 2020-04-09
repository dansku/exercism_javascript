
// Color Array
const resistorColor = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
]

export const decodedValue = (colors, colorLimit = 2) => Number(colors.slice(0,colorLimit).map(x => resistorColor.indexOf(x)).join(''))