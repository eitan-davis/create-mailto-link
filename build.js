const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');


module.exports = {
    mode: 'production',
  entry: {
    main: './src/index.html',
  },
    plugins: [

    ]
}