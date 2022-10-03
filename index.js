const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      slant: (value) => ({
        transform: `skew(${value}, ${value})`,
        "& > *": {
          transform: `skew(${flip(value)}, ${flip(value)})`,
        },
      }),
      "slant-x": (value) => ({
        transform: `skew(${value}, 0deg)`,
        "& > *": { transform: `skew(${flip(value)}, 0deg)` },
      }),
      "slant-y": (value) => ({
        transform: `skew(0deg, ${value})`,
        "& > *": { transform: `skew(0deg, ${flip(value)})` },
      }),
    },
    {
      values: theme("skew"),
      supportsNegativeValues: true,
    }
  );
});

function flip(value) {
  return value.startsWith("-") ? value.substring(1) : `-${value}`;
}
