const {
  sentryWebpackPlugin
} = require("@sentry/webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  devtool: "source-map",

  plugins: [sentryWebpackPlugin({
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: "assessio",
    project: "development"
  })]
};