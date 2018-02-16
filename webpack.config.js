var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    devtool: 'source-map',

    entry: './app/App.jsx',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
      inline: true,
      port: 3000
    },

    module: {

        rules: [
             {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                   presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
             },

              {
                  test: /\.scss$/,
                  use: ExtractTextPlugin.extract({
                      fallback: 'style-loader',
                      use: ['css-loader', 'sass-loader']
                  })
              }
          ]
    },
    plugins: [
       new ExtractTextPlugin('styles.css', {
           allChunks: true
       })
    ]
};


