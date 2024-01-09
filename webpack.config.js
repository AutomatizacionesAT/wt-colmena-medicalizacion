const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimiZerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: "development",
  entry: "./src/config/js/index.js",
  devtool: 'source-map', // RECONOCER CORRECTAMENTE LOS SOURCE MAPS DE LAS LIBRERIAS
  output: {
    path: __dirname + "/Web Training",
    filename: "noTocar/noTocar.js",
    assetModuleFilename: 'noTocar/[name][ext]',
    sourceMapFilename: 'noTocar/[file].map' // crea archvo map que mapea el cod de produccion a development
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [{
        from: __dirname + "/src/config" + "/assets/img/DATABASES", //deja por separado las imagenes de las bases de datos
        to: "imagenes" 
      },
    ]
    }),
    new MiniCssExtractPlugin({  // extrae el css del javascript para empaquetarlo como archivo aparte
      filename: 'noTocar/styles.css'
    })
  ],
  optimization: { // optimiza el codigo
    minimize: true,
    minimizer: [
      new CssMinimiZerPlugin(),
      new TerserPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {  // evitar estar poniendo rutas relativas en los import
      '@imagenes': __dirname + '/src/config/assets/img/',
      '@controllers': __dirname + '/src/config/controllers/',
      '@javascript': __dirname + '/src/config/js/',
      '@styles': __dirname + '/src/config/styles/',
      '@views': __dirname + '/src/config/views/',
      '@router': __dirname + '/src/config/router/',
    }
  },
  performance: { // 
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};
