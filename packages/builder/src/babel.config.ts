export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 9'],
        },
      },
    ],
  ],
}
