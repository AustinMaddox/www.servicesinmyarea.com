const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    clientLogLevel: "error", // The log level to show in the browser DevTools console.
    contentBase: false, // Where to serve public content from. This is only necessary if you want to serve static files.
    historyApiFallback: true, // Required for Reach Router.
    host: "0.0.0.0",
    port: process.env.PORT || 8042,
    public: "localhost:" + (process.env.PORT || 8042),
    publicPath: "/", // Where to serve webpack bundle output from.
    stats: "minimal" // Control what is shown in the terminal output.
  },
  entry: "./src/js/Entry.jsx",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  output: {
    filename: "output.js",
    path: __dirname + "/docs",
    publicPath: "/" // The URL to the output directory resolved relative to the HTML page (same directory).
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/graphics/favicon.ico",
      filename: "index.html",
      template: "./src/html/index-template.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output.
      // Both options are optional.
      filename: "output.css",
      chunkFilename: "[id].css"
    })
  ]
};
