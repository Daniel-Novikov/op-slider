const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js', 
        example: './src/example.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9000
    },
};