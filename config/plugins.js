module.exports = () => ({
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  'generate-html': {
    enabled: true,
    resolve: './src/plugins/generate-html'
  },
});
