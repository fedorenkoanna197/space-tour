const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        home: './code/index.js',
        destination: './code/destination-index.js',
        crew: './code/crew-index.js',
        techno: './code/tecnolegy-index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
       
}