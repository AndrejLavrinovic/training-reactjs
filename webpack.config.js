// const deepExtend = require('deep-extend')

// const devOptions = (isDev) => {
//   if (!isDev) return undefined;

//   return {
//     output: {
//       publicPath: '/',
//     },
//     devServer: {
//       contentBase: __dirname + '/dist',
//       port: 3200
//     }
//   };
// };

// module.exports = (env, argv) => deepExtend({
//   entry: './src/init.js',
//   output: {
//     path: __dirname + '/dist',
//     filename: 'init.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader?cacheDirectory=true'
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   }

// }, devOptions(argv.mode === 'development'))

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