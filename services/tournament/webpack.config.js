// const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');


module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          babelrc: false,
          rootMode: "upward",
        },
      },
    ],
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    symlinks: false,
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', '.aws-sam', 'build', 'TournamentService'),
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  // externals: [
  //   nodeExternals(),
  //   nodeExternals({
  //     modulesDir: path.resolve(__dirname, '../../node_modules'),
  //   }),
  // ],
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/generated/prisma-client/schema.prisma' },
        { from: './src/generated/prisma-client/libquery_engine-rhel-openssl-1.0.x.so.node' }
      ]
    })
  ]
};