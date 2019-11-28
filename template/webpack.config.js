const path = require('path');
const webpack = require('webpack');
const autoprefixer = require("autoprefixer");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const extractMiniCss = new MiniCssExtractPlugin({
  filename: "stylesheets/[name].css"
});

module.exports = {
  entry: {
    application: './source/javascripts/index.js',
    styles: './source/stylesheets/_application.sass'
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
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new SVGSpritemapPlugin(
      "source/fonts/svg/*.svg",
      {
        output: {
          filename: "images/sprite.svg",
          svgo: {
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
          }
        },
        sprite: {
          prefix: "icons-"
        }
      }
    ),
    extractMiniCss,
    new MinifyPlugin(),
    new CompressionPlugin({
      cache: true
    })
  ]
};
