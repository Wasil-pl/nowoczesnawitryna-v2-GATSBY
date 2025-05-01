exports.onCreateWebpackConfig = ({ stage, actions, plugins, loaders, getConfig }) => {
  // Wyklucz wybrane biblioteki z SSR
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /xterm|xterm-addon-fit/,
            use: loaders.null(),
          },
          {
            test: /@restart\/ui/,
            use: loaders.null(),
          },
          {
            test: /tsparticles/,
            use: loaders.null(),
          },
          {
            test: /popper.js/, // opcjonalnie, jeśli error nadal się pojawia
            use: loaders.null(),
          },
        ],
      },
    });
  }

  // Modyfikacja konfiguracji MiniCssExtractPlugin
  const config = getConfig();
  const miniCssExtractPlugin = config.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');

  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true;
  }

  actions.replaceWebpackConfig(config);
};
