const commonLoaders = [
    { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
    { test: /\.json$/, loader: 'json' },
  ];
  
  module.exports = [
    {
      name: 'browser',
      entry: './js/entry.js',
      output: {
        path: './build',
        filename: 'bundle.js',
      },
      module: {
        loaders: commonLoaders.concat([
          { test: /\.styl$/, loader: 'style!css!stylus' },
        ]),
      },
    },
    {
      name: 'server',
      entry: './server.js',
      target: 'node',
      output: {
        path: './build',
        filename: 'server.js',
        libraryTarget: 'commonjs2',
      },
      externals: [
        {
          'socket.io': 'socket.io',
        },
        /^[a-z\-0-9]+$/,
      ],
      module: {
        loaders: commonLoaders.concat([
          { test: /\.styl$/, loader: 'css!stylus' },
        ]),
      },
    },
  ];