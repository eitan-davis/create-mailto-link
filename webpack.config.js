const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');


const path_to_file = './source/index.html'; 

module.exports = {
    mode: 'production',
    entry: path_to_file,
    output: {
        filename: "bundel.js",
        path: path.resolve(__dirname, 'export'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    }
                ],

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path_to_file,
            inject: 'body',
            inlineSource: '.(js|css)$'
        }),
        new HtmlInlineCssWebpackPlugin(),
        new HtmlWebpackInlineSourcePlugin()
    ]
};