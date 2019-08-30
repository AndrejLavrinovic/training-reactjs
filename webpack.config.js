module.exports = {
    entry: {
      main: [
        'babel-polyfill',
        './src/init.js'
      ]
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: {
            loader: "css-loader"
          }
        }
      ]
    }
  };