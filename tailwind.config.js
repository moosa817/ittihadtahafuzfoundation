/** @type {import('tailwindcss').Config} */

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  content: ["./base/templates/*",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),


    new CopyWebpackPlugin({
      patterns: [
        { from: "node_modules/flowbite/dist/flowbite.min.js", to: "static/js/flowbite.min.js" }
      ]
    })
  ],
}