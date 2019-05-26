module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.25%', 'ie 11', 'not op_mini all']
        }
      }
    ],
    '@babel/preset-react'
  ];

  const plugins = [
    'react-loadable/babel',
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
    'babel-plugin-dynamic-import-node-babel-7',
    '@babel/plugin-proposal-class-properties'
  ];

  return {
    presets,
    plugins
  };
};
