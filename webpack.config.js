const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

// Common paths
const commonPaths = {
  outputPath: path.resolve(__dirname, 'public', 'static'),
};

// Base configuration
const baseConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

// Client configuration
const clientConfig = {
  ...baseConfig,
  target: 'web',
  entry: './src/client/index.js',
  output: {
    filename: 'client.bundle.js',
    path: commonPaths.outputPath,
  },
  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
};

// Server configuration
const serverConfig = {
    ...baseConfig,
    target: 'node',
    entry: './src/server/server.js',
    output: {
      filename: 'server.bundle.js',
      path: commonPaths.outputPath,
    },
    module: {
      ...baseConfig.module,
      rules: [
        ...baseConfig.module.rules,
        //To avoid building css twice
        {
          test: /\.css$/,
          use: ['null-loader'],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: 'null-loader',
          },
      ],
    },
    //For handling React Hooks server side
    externals: [nodeExternals()],
  };
  

module.exports = [clientConfig, serverConfig];

