import configuration from 'app-path/falcon-client.config.js';

const { logLevel = 'error', serverSideRendering = true, usePwaManifest = true, googleTagManager = { id: null } } =
  configuration.config || {};

const config = {
  __typename: 'Config',
  logLevel,
  serverSideRendering,
  usePwaManifest,
  googleTagManager: {
    __typename: 'GoogleTagManager',
    ...googleTagManager
  },
  language: {
    __typename: 'Language',
    default: 'en'
    // all: ['en', 'nl', 'pl', 'de', 'fr']
    // namespaces: ["common", "blog", "shop", "account"]
    // available: langs (should be fetch from falcon-server)
  }
};

export default {
  config,
  configSchema: {
    defaults: {
      config
    }
  },

  onServerCreated: configuration.onServerCreated || (() => {}),
  onServerInitialized: configuration.onServerInitialized || (() => {}),
  onServerStarted: configuration.onServerStarted || (() => {})
};