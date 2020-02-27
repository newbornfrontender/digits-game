module.exports = ({ production }) => ({
  autoprefixer: production,
  plugins: {
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
  },
});
