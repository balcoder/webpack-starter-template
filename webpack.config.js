const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// set process.env.NODE_ENV in package.json
module.exports = {
  //mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')

  },
  module: {
    rules: [
      {
        test: /\.scss$/,
            use: [
                // in development use style loader to put in head in production
                // use MiniCssExtractPlugin to put in file
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "myscss.css",
            chunkFilename: "[id].css"
        })
    ]
};

 console.log("process.env.NODE_ENV  : " + process.env.NODE_ENV);
