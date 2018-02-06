const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with your paths

const paths = {

// Put your structure paths here
DIST: path.resolve(__dirname, 'dist'),
SRC: path.resolve(__dirname, 'src'),
JS: path.resolve(__dirname, 'src/js'),
PUBLIC: path.resolve(__dirname, 'public'),
};

// Webpack configuration
// Change your entry point here

module.exports = {
 entry: path.join(paths.SRC, 'index.js'),
 output: {
 path: paths.DIST,
 filename: 'app.bundle.js',
},

// Tell webpack to use html plugin

plugins: [

 new HtmlWebpackPlugin({
  template: path.join(paths.PUBLIC, 'index.html'),
 }),

 new ExtractTextPlugin('style.bundle.css'),
],

// Loaders configuration
// We are telling webpack to use 'babel-loader' for .js and .jsx // files

module: {

 rules: [
  {
   test: /\.(js|jsx)$/,
   exclude: /node_modules/,
   loader: 'babel-loader',
   query: { presets: ['react','env'], cacheDirectory: true }
  },{
   test: /\.css$/,
   loader: ExtractTextPlugin.extract({
    use: 'css-loader',
   }),
  },{
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {'loader':'url-loader?limit=10000'},
        {'loader':'img-loader'}
      ]
    },{
      test:/\.json$/,
      loader:'file-loader'
    }
],
},
resolve: {
 extensions: ['.js', '.jsx'],
},
};
