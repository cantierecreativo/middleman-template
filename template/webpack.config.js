const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const extractSass = new ExtractTextPlugin({
  filename: "stylesheets/[name].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    application: './source/javascripts/index.js',
    styles: './source/stylesheets/application.sass'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'source/javascripts'),
      "node_modules"
    ],
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc.js")
    }
  },
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: 'javascripts/[name].js',
  },
  module: {
    rules: [
      {
        loader: "webpack-modernizr-loader",
        test: /\.modernizrrc\.js$/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.s[ac]ss/,
        use: 'import-glob-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: extractSass.extract({
          use: [
            { loader: "css-loader" },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            { loader: "sass-loader" }
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [ extractSass ]
};
