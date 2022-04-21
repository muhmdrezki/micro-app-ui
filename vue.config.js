const { name } = require('./package');
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*', // Allows the development environment to cross domain 
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'window', //  Package micro applications into  umd  Library format 
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};