const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

var svgoConfig = {
  multipass: true,
  pretty: true,
  plugins: [
    {cleanupAttrs: true},
    {cleanupEnableBackground: true},
    {cleanupIDs: true},
    {cleanupListOfValues: true},
    {cleanupNumericValues: true},
    {collapseGroups: true},
    {convertColors: true},
    {convertPathData: true},
    {convertShapeToPath: true},
    {convertStyleToAttrs: true},
    {convertTransform: true},
    {mergePaths: true},
    {moveElemsAttrsToGroup: true},
    {moveGroupAttrsToElems: true},
    //{removeAttrs: {attrs: '(fill|stroke)'}}, // if you don't want any color from the original SVG - see also the removeStyleElement option
    {removeComments: true},
    {removeDesc: false}, // for usability reasons
    {removeDimensions: true},
    {removeDoctype: true},
    {removeEditorsNSData: true},
    {removeEmptyAttrs: true},
    {removeEmptyContainers: true},
    {removeEmptyText: true},
    {removeHiddenElems: true},
    {removeMetadata: true},
    {removeNonInheritableGroupAttrs: true},
    {removeRasterImages: true}, // bitmap! you shall not pass!
    {removeScriptElement: true}, // shoo, javascript!
    //{removeStyleElement: true}, // if you really really want to remove ANY <style> tag from the original SVG, watch out as it could be too much disruptive - see also the removeAttrs option
    {removeTitle: false}, // for usability reasons
    {removeUnknownsAndDefaults: true},
    {removeUnusedNS: true},
    {removeUselessDefs: true},
    {removeUselessStrokeAndFill: true},
    {removeViewBox: false},
    {removeXMLProcInst: true},
    {sortAttrs: true}
  ]
};

const extractSass = new ExtractTextPlugin({
  filename: "stylesheets/[name].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    application: './source/javascripts/index.js',
    styles: './source/stylesheets/_application.sass',
    svg: './source/fonts/svg/svg_icons.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'source/stylesheets'),
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
          ]
        })
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: "fonts/svg/sprite.svg"
            }
          },
          {
            loader: 'svgo-loader',
            options: svgoConfig
          }
        ]
      }
    ]
  },
  plugins: [
    extractSass,
    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        id: 'svg-sprite-inline'
      }
    }) // render plain sprite without styles and usages in extract mode, as we want it
  ]
};
