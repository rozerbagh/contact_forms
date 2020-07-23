const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config, {
    mode: 'development',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'menu.html',
            template: './src/menu.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'service.html',
            template: './src/service.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html',

        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //3. Inject styles into DOM
                    'css-loader', //2. Turns css into configjs
                    'sass-loader' //1. Turns sass into css
                ]
            },
            
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ]
    }
});