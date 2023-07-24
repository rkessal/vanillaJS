const path = require('path');

const dirSrc = path.join(__dirname, "src")
const dirPublic = path.join(__dirname, "public")

module.exports = {
  mode: "production",
  entry: path.join(dirSrc, "index.js"),
  output: {
    "path": dirPublic,
    "filename": "main.js",
  },
  devServer: {
    static: dirPublic,
  },
  resolve:{
    modules:
    [
      dirSrc,
      dirPublic
    ],
    fallback: {
      events: require.resolve("events/")
    }
  },
  module: {
    rules: [
      {
        "test": /\.css$/,
        "use": ["style-loader", "css-loader"]
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": ["@babel/preset-env"]
          }
        }
      }
    ]
  }
}
