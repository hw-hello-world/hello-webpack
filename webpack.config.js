var path = require('path');

var SCRIPTS = 'app/scripts';

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, SCRIPTS + '/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  modulesDirectories: [
    'node_modules'
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css!' }
    ]
  }
};
